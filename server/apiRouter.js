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
   * GET route for transaction info for a user.
   * Endpoint: /api/users/{userid}/transactions
   * Optional Query Parameters:
   *   period
   *    values: WEEK, MONTH
   *    default: All transactions
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
        WHERE t.userId = ${req.params.id} `;

    if (req.query.period) {
      let { period } = req.query;
      period = period.toUpperCase();
      if (period === 'WEEK' || period === 'MONTH') {
        sql += `
            AND ${period}(t.date) = ${period}(CURDATE()) AND
            YEAR(t.date) = YEAR(CURDATE()) AND
            t.date <= CURDATE() `;
      } else {
        badRequest = true;
        res.status(400).json({ error: 'Bad Request. Invalid period.' });
      }
    }

    if (req.query.searchTerm) {
      let { searchTerm } = req.query;
      searchTerm = searchTerm.toUpperCase();
      sql += `
      AND t.merchant LIKE '%${searchTerm}%'`;
    }

    if (!badRequest) {
      pool.query(sql, (error, results) => {
        if (error) throw error;
        if (results.length < 1) {
          res.status(404).json({ error: 'No results were found.' });
        } else {
          res.json(results);
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
   *    default: MONTH
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
    ({ sql, badRequest } = generateCategorySpendSql(req, badRequest, res));

    if (!badRequest) {
      let groups = [];
      pool.getConnection((err, conn) => {
        if (err) throw err;

        conn.query(sql, (error, results) => {
          if (error) throw error;
          groups = results;
        });

        sql = `
            SELECT SUM(budgets.budget) AS budget, categories.displayName, GROUP_CONCAT(DISTINCT categories.categoryId) AS id FROM budgets
            JOIN categories ON categories.categoryId = budgets.categoryId
            WHERE budgets.userId = ${req.params.id}
            GROUP BY categories.displayName `;

        conn.query(sql, (error, results) => {
          if (error) throw err;
          if (results.length < 1) {
            res.status(404).json({ error: 'No results were found.' });
          } else {
            conn.release();
            if (error) throw error;
            res.json(generateCategoryObjects(results, groups));
          }
        });
      });
    }
  });
};
