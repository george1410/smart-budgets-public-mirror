exports.setBudgets = (userId) => {
  const sql = `
        SELECT displayName, ROUND(SUM(amount)/4) 
        FROM transactions 
        JOIN categories 
        ON transactions.categoryId = categories.categoryId 
        WHERE transactions.userId = ${userId}
        AND date BETWEEN DATE_SUB(CURDATE(), INTERVAL 4 MONTH) AND CURDATE() 
        GROUP BY displayName
    `;
};

/*
  // a simple query dividing the sum by 4 between the two dates provided
  app.get('/api/users/:id/budget', (req, res) => {
    const querySelect = `
          SELECT ROUND(SUM(amount) / 4)
          FROM transactions
          WHERE userId = ${req.params.id} 
          AND date BETWEEN DATE_SUB(CURDATE(), INTERVAL 4 MONTH) AND CURDATE()
          `;

    pool.query(querySelect, (error, results) => {
      if (error) throw error;
      if (results.length < 1) {
        res.status(404).json({ error: 'No results were found.' });
      } else {
        res.json(results);
      }
    });
  });

  // budget for category
  app.get('/api/users/:id/:category/budget', (req, res) => {
    const querySelect = `
        SELECT ROUND(SUM(amount) / 4)
        FROM transactions
        WHERE userId = ${req.params.id} 
        AND categoryId = ${req.params.category}
        AND date BETWEEN DATE_SUB(CURDATE(), INTERVAL 4 MONTH) AND CURDATE()
        `;

    pool.query(querySelect, (error, results) => {
      if (error) throw error;
      if (results.length < 1) {
        res.status(404).json({ error: 'No results were found.' });
      } else {
        res.json(results);
      }
    });
  });
  */
