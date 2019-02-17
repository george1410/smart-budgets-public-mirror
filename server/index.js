const express = require('express');
const os = require('os');
const conn = require('./database');

const app = express();

app.use(express.static('build'));
app.get('/api/getUsername', (req, res) => res.send({
  username: os.userInfo().username,
}));

app.get('/api/getDatabaseUsername', (req, res) => {
  conn.query('SELECT firstName, lastName FROM users WHERE userId = 1', (error, results) => {
    if (error) throw error;
    const name = `${results[0].firstName} ${results[0].lastName}`;
    res.send({ username: name });
  });
});

app.get('/api/users/:id/categories', (req, res) => {
  const sql = `
      SELECT * from categories 
      JOIN budgets ON categories.userId = budgets.userId 
      WHERE categories.userId = ${req.params.id}
    `;

  conn.query(sql, (err, results) => {
    if (err) throw err;

    const out = [];
    results.forEach((cat) => {
      let found = false;
      const catIndex = `cat${cat.categoryId}`;

      out.forEach((el, index) => {
        if (el.displayName === cat.displayName) {
          out[index].categoryId.push(cat.categoryId);
          out[index].budget += cat[catIndex];
          found = true;
        }
      });
      if (!found) {
        out.push({
          displayName: cat.displayName,
          budget: cat[catIndex],
          categoryId: [cat.categoryId],
        });
      }
    });

    res.json(out);
  });
});

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
