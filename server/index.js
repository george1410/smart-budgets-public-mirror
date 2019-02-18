const express = require('express');
const conn = require('./database');

const app = express();

app.use(express.static('build'));

/**
 * GET route for transcation info for a user.
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
  if(req.query.period){
    let period = req.query.period;
    if(period === 'week' ){
      const querySelect = `
        SELECT * FROM transactions AS t 
        JOIN categories AS c ON c.categoryId = t.categoryId 
        WHERE t.userId = ${req.params.id}
        AND MONTH(transactions.date) = WEEK(CURDATE()) AND
        YEAR(transactions.date) = YEAR(CURDATE()) AND
        transactions.date < CURDATE()
        `;
    }else if(period === 'month'){
      const querySelect = `
        SELECT * FROM transactions AS t 
        JOIN categories AS c ON c.categoryId = t.categoryId 
        WHERE t.userId = ${req.params.id}
        AND MONTH(transactions.date) = MONTH(CURDATE()) AND
        YEAR(transactions.date) = YEAR(CURDATE()) AND
        transactions.date < CURDATE()`;
    }
  }else{
    const querySelect = `
      SELECT * FROM transactions AS t 
      JOIN categories AS c ON c.categoryId = t.categoryId 
      WHERE t.userId = ${req.params.id}`;
  }
 
  conn.query(querySelect, (error, results) => {
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
  let sql = `
    SELECT SUM(transactions.amount) AS spend, categories.displayName, GROUP_CONCAT(DISTINCT categories.categoryId) AS id, transactions.date FROM transactions
    JOIN categories ON transactions.categoryId = categories.categoryId
    WHERE transactions.userId = ${req.params.id} AND 
      MONTH(transactions.date) = MONTH(CURDATE()) AND
      YEAR(transactions.date) = YEAR(CURDATE()) AND
      transactions.date < CURDATE()
    GROUP BY categories.displayName
  `;

  let res1 = [];
  conn.query(sql, (err, results) => {
    if (err) throw err;

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

  conn.query(sql, (err, results) => {
    if (err) throw err;
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
      res.json(out);
    }
  });
});

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
