const pool = require('./database');
const { generateCategorySpendSql, generateCategoryObjects } = require('./categoryEndpointHelpers');

/**
 * GET route for various user info.
 * Endpoint: /api/users/{userid}
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

module.exports = (app) => {
  app.get('/api/users/:id', (req, res) => {
    const sql = `
        SELECT firstName, lastName, email, period, periodStart FROM users WHERE userId = ${req.params.id}`;
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
   * POST route for updating user period value
   * Endpoint: /api/users/{id}/period
   *
   * POST body:
   *   {
   *     period: MONTH | WEEK
   *   }
   */
  app.post('/api/users/:id/period', (req, res) => {
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
};
