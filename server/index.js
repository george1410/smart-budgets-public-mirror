const express = require('express');
require('dotenv').config();
const path = require('path');
const bodyParser = require('body-parser');
const apiRouter = require('./apiRouter');
const authRouter = require('./authRouter');
const idMatcher = require('./middleware/idMatcher');

const app = express();
app.use(bodyParser.json({ type: '*/*' }));

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
app.get('public/api/users/:id/transactions', (req, res) => {
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
 * Get and change period from user
 */
app.post('/period', (req, res) => {
 let sql = `
 SELECT period FROM users 
 WHERE t.userId = ${req.params.id} `;
 
  if (sql === 'WEEK') {
   sql += `
   UPDATE period SET users = 'MONTH' WHERE userId = ${req.params.id}`;
 } else if(sql === 'MONTH'){
   sql += `
   
   UPDATE period SET users = 'WEEK' WHERE userId = ${req.params.id}`;
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
// 'server-dev' command sets this env var
// this makes writing and testing endpoints easier as you
// dont need to have a jwt set.
if (!process.env.NO_JWT) {
  app.use('/api/users/:id', idMatcher);
}

app.use(express.static(path.join(__dirname, '..', 'build')));

// Auth Routing
authRouter(app);

// API Routing
apiRouter(app);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
