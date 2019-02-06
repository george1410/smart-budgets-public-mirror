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

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
