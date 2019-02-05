const mysql = require('mysql');

const conn = mysql.createConnection({
  host: 'smartbudgets.co6kasjhhncd.eu-west-1.rds.amazonaws.com',
  user: 'smartbudgets',
  password: 'capitalone',
  database: 'smartbudgets',
  port: 8080,
});

conn.connect();

module.exports = conn;
