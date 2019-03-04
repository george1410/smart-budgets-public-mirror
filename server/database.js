const mysql = require('mysql');

const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'smartbudgets.co6kasjhhncd.eu-west-1.rds.amazonaws.com',
  user: 'smartbudgets',
  password: 'capitalone',
  database: 'smartbudgets',
  port: 8080,
});

module.exports = pool;
