const pool = require('./database');
const { generateCategorySpendSql, generateCategoryObjects } = require('./categoryEndpointHelpers');
const pointsCalculator = require('./pointsCalculator');

module.exports = (app) => {
  /**
   * GET route for returning all users based on search term.
   * Endpoint: /api/users/
   * Required Query Parameters:
   *   searchTerm
   *     'string'
   * Response format:
   *   [
   *     {
   *       "firstName": "John",
   *       "lastName": "Doe",
   *       "email": "example@email.com",
   *       "period": "MONTH"
   *       "sentRequest": true,             // means that user {id} has sent a request to John Doe
   *       "receivedRequest": false         // means that John Doe has sent a request to user {id}
   *    }
   *  ]
   */
  app.get('/api/users/', (req, res) => {
    const { id, searchTerm } = req.query;
    const sql = `
      SELECT userId, firstName, lastName, email, period, userId1 AS sender, userId2 AS receiver
      FROM users
      LEFT JOIN friendships
      ON userId = userId2 OR userId = userId1
      WHERE userId NOT IN (SELECT userId
                            FROM users
                            JOIN friendships
                            ON userId = userId1 OR userId = userId2
                            WHERE accepted = 1)
      AND userId <> ${id}
      AND (firstName LIKE '%${searchTerm}%' OR lastName LIKE '%${searchTerm}%')
    `;
    pool.query(sql, (error, results) => {
      if (error) throw error;
      if (results.length < 1) {
        res.status(404).json({ error: 'No results were found.' });
      } else {
        const output = [];
        results.forEach((result) => {
          const ob = result;
          ob.sentRequest = false;
          ob.receivedRequest = false;
          if (result.sender === parseInt(id, 10)) {
            ob.sentRequest = true;
          }
          if (result.receiver === parseInt(id, 10)) {
            ob.receivedRequest = true;
          }
          delete ob.sender;
          delete ob.receiver;
          output.push(ob);
        });
        res.json(output);
      }
    });
  });
  /**
   * GET route for various user info.
   * Endpoint: /api/users/{userid}
   * Response format:
   *   {
   *     "firstName": "John",
   *     "lastName": "Doe",
   *     "email": "example@email.com",
   *     "period": "MONTH"
   *  }
   */
  app.get('/api/users/:id', (req, res) => {
    pool.getConnection((connErr, conn) => {
      if (connErr) throw connErr;
      pointsCalculator.calculate(conn, req.params.id, (points) => {
        let sql = `
          SELECT firstName, lastName, email, period, periodStart, streak, highScore FROM users WHERE userId = ${req.params.id}
        `;
        conn.query(sql, (error, results) => {
          if (error) throw error;
          if (results.length < 1) {
            res.status(404).json({ error: 'No results were found.' });
          } else {
            const out = results[0];
            out.points = points;
            sql = `
              SELECT badges.id, badges.name, badges.description FROM badges
              JOIN badgesAwarded ON badges.id = badgeId WHERE userId = ${req.params.id}
            `;
            conn.query(sql, (err, results1) => {
              out.badges = results1;
              res.json(out);
              conn.release();
            });
          }
        });
      });
    });
  });

  /**
   * POST route for updating user period.
   * Endpoint: /api/users/{userid}
   *
   * POST Body:
   *  {
   *    period: "WEEK" | "MONTH"
   *  }
   */
  app.post('/api/users/:id/period', (req, res) => {
    const { period } = req.body;
    const { id } = req.params;
    const sql = `
      UPDATE users SET newPeriod = '${period}' WHERE userId = ${id}
      `;
    pool.query(sql, (err) => {
      if (err) throw err;
      res.sendStatus(200);
    });
  });

  /**
   * GET route for all badges info
   * Endpoint: /api/badges
   * Response format:
   *   [
   *     {
   *       "id": Number,
   *       "name": "Marathon",
   *       "description": "Maintain a streak for 5 periods.",
   *    }
   *  ]
   */

  app.get('/api/badges', (req, res) => {
    const sql = `
      SElECT * from badges
    `;
    pool.query(sql, (err, results) => {
      if (err) throw err;
      res.json(results);
    });
  });

  /** !!CURRENTLY THIS ENDPOINT IS NOT IN USE!!
   * POST route for updating user period value
   * Endpoint: /api/users/{id}/periodStart
   *
   * POST body:
   *   {
   *     periodStart: Number from 1 to 31
   *   }
   */
  app.post('/api/users/:id/periodStart', (req, res) => {
    const { periodStart } = req.body;
    const { id } = req.params;
    const sql = `
      UPDATE users SET periodStart = '${periodStart}' WHERE userId = ${id}
      `;
    pool.query(sql, (err) => {
      if (err) throw err;
      res.sendStatus(200);
    });
  });

  /**
   * GET route for transaction info for a user.
   * Endpoint: /api/users/{userid}/transactions
   * Optional Query Parameters:
   *   startDate
   *     yyyy-mm-dd
   *   endDate
   *     yyy-mm-dd
   *   shownCategories
   *     [1,2,3,4,5..., 61]
   *   textFilter
   *     'merchant'
   *    minAmount
   *      numeric value
   *    maxAmount
   *      numeric value
   * Response format:
   *   [
   *     {
   *       "transactionId": 1,
   *       "userId": 1,
   *       "date": "2019-01-13T00:00:00.000Z",
   *       "merchant": "MISC DIY",
   *       "categoryId": 1,
   *       "amount": 25,
   *       "originalName": "DIY & FURNITURE",
   *       "displayName": "SHOPPING"
   *     }, ...
   *   ]
   */

  app.get('/api/users/:id/transactions', (req, res) => {
    let sql = `
        SELECT * FROM transactions AS t
        JOIN categories AS c ON c.categoryId = t.categoryId
        WHERE t.userId = ${req.params.id}
        AND t.date <= CURDATE() `;

    if (req.query.startDate && req.query.endDate) {
      const { startDate, endDate } = req.query;
      sql += `AND t.date BETWEEN '${startDate}' AND '${endDate}' `;
    }

    if (req.query.shownCategories) {
      const { shownCategories } = req.query;
      sql += ` AND t.categoryId IN (${shownCategories.join(', ')})`;
    }

    if (req.query.textFilter) {
      let { textFilter } = req.query;
      textFilter = textFilter.toUpperCase();
      sql += `
      AND t.merchant LIKE '%${textFilter}%'`;
    }

    if (req.query.minAmount && req.query.maxAmount) {
      const { minAmount, maxAmount } = req.query;
      sql += ` AND t.amount BETWEEN ${minAmount} AND ${maxAmount}`;
    }

    // sets default sorting order as this is also set on the frontend
    sql += ' ORDER BY t.date DESC';

    // if query params not present, for some reason, then default to first 50
    sql += ` LIMIT ${req.query.start || 0}, ${req.query.count || 50}`;

    pool.query(sql, (error, results) => {
      if (error) throw error;
      if (results.length < 1) {
        res.status(404).json({ error: 'No results were found.', hasMore: false });
      } else if (results.length < req.query.count) {
        res.json({ transactions: results, hasMore: false });
      } else {
        res.json({ transactions: results, hasMore: true });
      }
    });
  });

  /**
   * GET route for budget info by category for a user.
   * Endpoint: /api/users/{userid}/categories
   * Optional Query Parameters:
   *   period
   *    values: WEEK, MONTH
   *    default: USER'S SELECTED PERIOD
   * Response format:
   *    [
   *      {
   *        "budget": 1708,
   *        "spend": 320,
   *        "displayName": "BILLS",
   *        "id": [
   *          31,
   *          52
   *        ]
   *      }, ...
   *    ]
   */

  app.get('/api/users/:id/categories', (req, res) => {
    let badRequest = false;
    let sql;

    if (!badRequest) {
      let groups = [];
      pool.getConnection((err, conn) => {
        if (err) throw err;

        sql = `SELECT period, periodStart FROM users WHERE userId = ${req.params.id}`;
        conn.query(sql, (error, results) => {
          if (error) throw error;
          if (results.length < 1) {
            res.status(404).json({ error: 'No results were found.' });
            conn.release();
          } else {
            if (!req.query.period) {
              req.query.period = results[0].period;
            }
            req.query.periodStart = results[0].periodStart;

            ({ sql, badRequest } = generateCategorySpendSql(req, badRequest, res));

            conn.query(sql, (error1, results1) => {
              if (error1) throw error;
              groups = results1;
            });

            sql = `
              SELECT SUM(budgets.budget) AS budget, categories.displayName, GROUP_CONCAT(DISTINCT categories.categoryId) AS id FROM budgets
              JOIN categories ON categories.categoryId = budgets.categoryId
              WHERE budgets.userId = ${req.params.id}
              GROUP BY categories.displayName `;

            conn.query(sql, (error2, results2) => {
              if (error2) throw err;
              if (results2.length < 1) {
                res.status(404).json({ error: 'No results were found.' });
                conn.release();
              } else {
                if (error) throw error;
                res.json(generateCategoryObjects(results2, groups));
                conn.release();
              }
            });
          }
        });
      });
    }
  });

  /**
   * POST route for adding a friend.
   * Endpoint: /api/users/{userid}/friends
   *
   * POST Body:
   *  {
   *    friendId: {friendId}
   *  }
   */
  app.post('/api/users/:id/friends', (req, res) => {
    const user1 = req.params.id;
    const user2 = req.body.friendId;

    pool.getConnection((err, conn) => {
      if (err) throw err;
      let sql = `
      SELECT * FROM friendships WHERE (userId1 = ${user1} AND userId2 = ${user2}) OR
      (userId1 = ${user2} AND userId2 = ${user1})
      `;

      conn.query(sql, (err1, results) => {
        if (err1) throw err1;
        if (results.length > 0) {
          conn.release();
          res.status(200).json({ error: 'Friendship already exists' });
        } else {
          sql = `
          INSERT INTO friendships (userId1, userId2) VALUES (${user1}, ${user2})
          `;

          conn.query(sql, (err2) => {
            if (err2) throw err2;
            sql = `SELECT COUNT(friendshipId) AS count FROM friendships WHERE userId1 = ${user1} OR userId2 = ${user1}`;

            conn.query(sql, (err3, countRes) => {
              if (err3) throw err3;
              if (countRes[0].count === 1) {
                sql = `INSERT INTO badgesAwarded (userId, badgeId) VALUES (${user1}, 1)`;
                conn.query(sql, (err4) => {
                  if (err4) throw err4;
                  conn.release();
                  res.sendStatus(201);
                });
              } else if (countRes[0].count === 5) {
                sql = `INSERT INTO badgesAwarded (userId, badgeId) VALUES (${user1}, 2)`;
                conn.query(sql, (err4) => {
                  if (err4) throw err4;
                  conn.release();
                  res.sendStatus(201);
                });
              } else {
                conn.release();
                res.sendStatus(201);
              }
            });
          });
        }
      });
    });
  });

  /**
   * DELETE route for deleting a friend.
   * Endpoint: /api/users/{userid}/friends/{friendid}
   *
   */
  app.delete('/api/users/:id/friends/:fid', (req, res) => {
    const user1 = req.params.id;
    const user2 = req.params.fid;
    const sql = `
    DELETE FROM friendships WHERE (userId1 = ${user1} AND userId2 = ${user2}) OR
    (userId1 = ${user2} AND userId2 = ${user1})
    `;
    pool.query(sql, (err) => {
      if (err) throw err;
      res.sendStatus(200);
    });
  });

  /**
   * GET route for getting info about a user's friends.
   * Endpoint: /api/users/{userid}/friends
   *
   * Optional Query Parameters:
   *   status
   *     values: sent, received
   *     default: both sent and received (all friendships)
   *   accepted
   *    values: TRUE, FALSE
   *    default: both accepted and not accepted
   * Response format:
   *    [
   *      {
   *        "userId": 2,
   *        "accepted": true
   *        "firstName": "John"
   *        "lastName": "Doe"
   *      }, ...
   *    ]
   */
  app.get('/api/users/:id/friends', (req, res) => {
    const userId = req.params.id;
    let sql = `
      SELECT userId, userId1, userId2, accepted, firstName, lastName, period, streak, highScore
      FROM friendships JOIN users ON userId1 = userId OR userId2 = userId
      `;

    if (req.query.status === 'sent') {
      sql += `WHERE userId1 = ${userId}`;
    } else if (req.query.status === 'received') {
      sql += `WHERE userId2 = ${userId}`;
    } else {
      sql += `WHERE (userId1 = ${userId} OR userId2 = ${userId})`;
    }

    if (req.query.accepted) {
      sql += ` AND accepted = ${req.query.accepted}`;
    }

    pool.getConnection((connErr, conn) => {
      if (connErr) throw connErr;
      conn.query(sql, (err, results) => {
        if (err) throw err;
        const strippedResults = [];
        results.forEach((result) => {
          if (result.userId.toString() !== userId) {
            strippedResults.push(result);
          }
        });

        if (strippedResults.length === 0) {
          res.json([]);
          conn.release();
        } else {
          const resArr = [];
          let counter = 0;

          strippedResults.forEach((result) => {
            const obj = {};
            obj.accepted = result.accepted;
            obj.userId = result.userId;
            obj.firstName = result.firstName;
            obj.lastName = result.lastName;
            obj.period = result.period;
            obj.streak = result.streak;
            obj.highScore = result.highScore;

            pointsCalculator.calculate(conn, result.userId, (points) => {
              obj.points = points;
              sql = `
              SELECT badges.id, badges.name, badges.description FROM badges
              JOIN badgesAwarded ON badges.id = badgeId WHERE userId = ${result.userId}
              `;

              conn.query(sql, (err1, result1) => {
                if (err1) throw err1;
                obj.badges = result1;
                resArr.push(obj);
                counter += 1;
                if (counter === strippedResults.length) {
                  res.json(resArr);
                  conn.release();
                }
              });
            });
          });
        }
      });
    });
  });

  /**
   * POST route for accepting a friend request
   * Endpoint: /api/users/{id}/friends/{friendId}
   *
   * POST Body:
   *  {
   *    accepted: TRUE | FALSE
   *  }
   */
  app.post('/api/users/:id/friends/:friendId', (req, res) => {
    const { accepted } = req.body;
    let sql;
    if (typeof accepted !== 'undefined') {
      if (accepted) {
        sql = `
          UPDATE friendships
          SET accepted = TRUE
          WHERE userId1 = ${req.params.friendId}
          AND userId2 = ${req.params.id}
        `;
      } else {
        sql = `
          DELETE FROM friendships
          WHERE userId1 = ${req.params.friendId}
          AND userId2 = ${req.params.id}
        `;
      }
      pool.getConnection((connErr, conn) => {
        if (connErr) throw connErr;

        conn.query(sql, (err) => {
          if (err) throw err;
          if (accepted) {
            sql = `SELECT COUNT(friendshipId) AS count FROM friendships WHERE userId1 = ${req.params.id} OR userId2 = ${req.params.id}`;

            conn.query(sql, (err3, countRes) => {
              if (err3) throw err3;
              if (countRes[0].count === 1) {
                sql = `INSERT INTO badgesAwarded (userId, badgeId) VALUES (${req.params.id}, 1)`;
                conn.query(sql, (err4) => {
                  if (err4) throw err4;
                  conn.release();
                  res.sendStatus(201);
                });
              } else if (countRes[0].count === 5) {
                sql = `INSERT INTO badgesAwarded (userId, badgeId) VALUES (${req.params.id}, 2)`;
                conn.query(sql, (err4) => {
                  if (err4) throw err4;
                  conn.release();
                  res.sendStatus(200);
                });
              } else {
                conn.release();
                res.sendStatus(200);
              }
            });
          } else {
            conn.release();
            res.sendStatus(200);
          }
        });
      });
    } else {
      res.status(400).json({ error: 'Bad Request. Body must include value for accepted.' });
    }
  });
};
