const express = require('express');
const path = require('path');
const pool = require('./database');

const app = express();

app.use(express.static(path.join(__dirname, '..', 'build')));

/**
 * GET route for transcation info for a user.
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
  let sql;
  if (req.query.period) {
    let { period } = req.query;
    period = period.toUpperCase();
    if (period === 'WEEK' || period === 'MONTH') {
      sql = `
        SELECT * FROM transactions AS t 
        JOIN categories AS c ON c.categoryId = t.categoryId 
        WHERE t.userId = ${req.params.id}
        AND ${period}(t.date) = ${period}(CURDATE()) AND
        YEAR(t.date) = YEAR(CURDATE()) AND
        t.date <= CURDATE()
        `;
    }
  } else {
    sql = `
      SELECT * FROM transactions AS t 
      JOIN categories AS c ON c.categoryId = t.categoryId 
      WHERE t.userId = ${req.params.id}`;
  }

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
  let sql;
  let badRequest = false;
  if (req.query.period) {
    let { period } = req.query;
    period = period.toUpperCase();

    if (period === 'WEEK') {
      sql = `
        SELECT SUM(transactions.amount) AS spend, categories.displayName, GROUP_CONCAT(DISTINCT categories.categoryId) AS id, transactions.date FROM transactions
        JOIN categories ON transactions.categoryId = categories.categoryId
        WHERE transactions.userId = ${req.params.id} AND 
          WEEK(transactions.date) = WEEK(CURDATE()) AND
          YEAR(transactions.date) = YEAR(CURDATE()) AND
          transactions.date <= CURDATE()
        GROUP BY categories.displayName
      `;
    } else if (period === 'MONTH') {
      sql = `
        SELECT SUM(transactions.amount) AS spend, categories.displayName, GROUP_CONCAT(DISTINCT categories.categoryId) AS id, transactions.date FROM transactions
        JOIN categories ON transactions.categoryId = categories.categoryId
        WHERE transactions.userId = ${req.params.id} AND 
          MONTH(transactions.date) = MONTH(CURDATE()) AND
          YEAR(transactions.date) = YEAR(CURDATE()) AND
          transactions.date <= CURDATE()
        GROUP BY categories.displayName
      `;
    } else {
      badRequest = true;
      res.status(400).json({ error: 'Bad Request. Invalid period.' });
    }
  } else {
    sql = `
      SELECT SUM(transactions.amount) AS spend, categories.displayName, GROUP_CONCAT(DISTINCT categories.categoryId) AS id, transactions.date FROM transactions
      JOIN categories ON transactions.categoryId = categories.categoryId
      WHERE transactions.userId = ${req.params.id} AND 
        MONTH(transactions.date) = MONTH(CURDATE()) AND
        YEAR(transactions.date) = YEAR(CURDATE()) AND
        transactions.date <= CURDATE()
      GROUP BY categories.displayName
  `;
  }

  if (!badRequest) {
    let res1 = [];
    pool.getConnection((err, conn) => {
      if (err) throw err;

      conn.query(sql, (error, results) => {
        if (error) throw error;

        res1 = results;
        res1.forEach((result, key) => {
          res1[key].id = result.id.split(',').map(Number);
        });
        res1 = results;
      });

      sql = `
      SELECT SUM(budgets.budget) AS budget, categories.displayName, GROUP_CONCAT(DISTINCT categories.categoryId) AS id FROM budgets 
      JOIN categories ON categories.categoryId = budgets.categoryId
      WHERE budgets.userId = ${req.params.id}
      GROUP BY categories.displayName
    `;

      conn.query(sql, (error, results) => {
        if (error) throw err;
        if (results.length < 1) {
          res.status(404).json({ error: 'No results were found.' });
        } else {
          const out = [];
          results.forEach((result) => {
            let found = false;
            res1.forEach((group) => {
              if (result.displayName === group.displayName) {
                found = true;
                out.push({
                  budget: result.budget,
                  spend: group.spend,
                  displayName: result.displayName,
                  id: result.id.split(',').map(Number),
                });
              }
            });
            if (!found) {
              out.push({
                budget: result.budget,
                spend: 0,
                displayName: result.displayName,
                id: result.id.split(',').map(Number),
              });
            }
          });
          conn.release();
          if (error) throw error;
          res.json(out);
        }
      });
    });
  }
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
