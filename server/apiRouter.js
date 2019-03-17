const pool = require('./database');
const { generateCategorySpendSql, generateCategoryObjects } = require('./categoryEndpointHelpers');


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
   *    }
   *  ]
   */
  app.get('/api/users/', (req, res) => {
    const { id, searchTerm } = req.query;
    const sql = `
        SELECT userId, firstName, lastName, email, period FROM users WHERE userId!=${id} AND firstName LIKE '%${searchTerm}%' OR lastName LIKE '%${searchTerm}%'`;
    pool.query(sql, (error, results) => {
      if (error) throw error;
      if (results.length < 1) {
        res.status(404).json({ error: 'No results were found.' });
      } else {
        res.json(results);
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
    const sql = `
        SELECT firstName, lastName, email, period FROM users WHERE userId = ${req.params.id}`;
    pool.query(sql, (error, results) => {
      if (error) throw error;
      if (results.length < 1) {
        res.status(404).json({ error: 'No results were found.' });
      } else {
        res.json(results[0]);
      }
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
  app.post('/api/users/:id', (req, res) => {
    const { period } = req.body;
    const { id } = req.params;
    const sql = `
      UPDATE users SET period = '${period}' WHERE userId = ${id}
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
   *   period
   *    values: WEEK, MONTH
   *    default: All transactions
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
    let badRequest = false;
    let sql = `
        SELECT * FROM transactions AS t
        JOIN categories AS c ON c.categoryId = t.categoryId
        WHERE t.userId = ${req.params.id}
        AND t.date <= CURDATE() `;

    if (req.query.period) {
      let { period } = req.query;
      period = period.toUpperCase();
      if (period === 'WEEK' || period === 'MONTH') {
        sql += `
            AND ${period}(t.date) = ${period}(CURDATE()) AND
            YEAR(t.date) = YEAR(CURDATE()) `;
      } else {
        badRequest = true;
        res.status(400).json({ error: 'Bad Request. Invalid period.' });
      }
    }

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

    if (!badRequest) {
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
    }
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

        sql = `SELECT period FROM users WHERE userId = ${req.params.id}`;
        conn.query(sql, (error, results) => {
          if (error) throw error;
          if (results.length < 1) {
            res.status(404).json({ error: 'No results were found.' });
          } else if (!req.query.period) {
            req.query.period = results[0].period;
            ({ sql, badRequest } = generateCategorySpendSql(req, badRequest, res));
          }

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
            } else {
              conn.release();
              if (error) throw error;
              res.json(generateCategoryObjects(results2, groups));
            }
          });
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

    // in future we need to change the TRUE below to FALSE, to allow accepting/declining requests
    const sql = `
      INSERT INTO friendships (userId1, userId2) VALUES (${user1}, ${user2})
    `;

    pool.query(sql, (err) => {
      if (err) throw err;
      res.sendStatus(201);
    });
  });

  /**
   * GET route for getting info about a user's friends.
   * Endpoint: /api/users/{userid}/friends
   *
   * Optional Query Parameters:
   *   accepted
   *    values: TRUE, FALSE
   *    default: both accepted and not accepted
   * Response format:
   *    [
   *      {
   *        "userId": 2,
   *        "accepted": true
   *      }, ...
   *    ]
   */
  app.get('/api/users/:id/friends', (req, res) => {
    const userId = req.params.id;
    let sql = `
      SELECT * FROM friendships
      WHERE (userId1 = ${userId}
      OR userId2 = ${userId})
      `;

    if (req.query.accepted) {
      sql += `AND accepted = ${req.query.accepted}`;
    }

    pool.query(sql, (err, results) => {
      if (err) throw err;
      const resArr = [];
      results.forEach((result) => {
        const obj = {
          accepted: result.accepted,
        };
        if (result.userId1 === userId) {
          obj.userId = result.userId2;
        } else {
          obj.userId = result.userId1;
        }
        resArr.push(obj);
      });
      res.json(resArr);
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
      pool.query(sql, (err) => {
        if (err) throw err;
        res.sendStatus(200);
      });
    } else {
      res.status(400).json({ error: 'Bad Request. Body must include value for accepted.' });
    }
  });

  /**
   * GET route for getting information about a specific friend of a user
   * Endpoint: /api/users/{id}/friends/{friendId}
   *
   * Response format:
   * {
   *   userId: 2,
   *   firstName: "Jane",
   *   lastName: "Smith"
   * }
   */
  app.get('/api/users/:id/friends/:friendId', (req, res) => {
    const { id, friendId } = req.params;

    let sql = `
      SELECT friendshipId
      FROM friendships
      WHERE ((userId1 = ${id} AND userId2 = ${friendId})
      OR (userId1 = ${friendId} AND userId2 = ${id}))
      AND accepted = TRUE
    `;

    pool.query(sql, (err, results) => {
      if (err) throw err;
      if (results.length < 1) {
        res.sendStatus(404);
      } else {
        sql = `
          SELECT userId, firstName, lastName
          FROM users
          WHERE userId = ${friendId}
        `;
        pool.query(sql, (err1, results1) => {
          if (err1) throw err1;
          res.json(results1[0]);
        });
      }
    });
  });
};
