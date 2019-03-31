const schedule = require('node-schedule');
const pool = require('./database');

function calculateBudgets(userId) {
  let query = `
    SELECT categories.categoryId, ROUND(SUM(amount)/4) AS newBudget
    FROM transactions 
    JOIN categories 
    ON transactions.categoryId = categories.categoryId 
    WHERE transactions.userId = ${userId}
    AND date BETWEEN DATE_SUB(CURDATE(), INTERVAL 4 MONTH) AND CURDATE()
    GROUP BY categoryId 
  `;
  pool.getConnection((connErr, conn) => {
    if (connErr) throw connErr;
    conn.query(query, (err, res) => {
      if (err) throw err;
      query = `
        UPDATE budgets
        SET budget = 0
        WHERE userId = ${userId}
      `;
      conn.query(query, (qerr) => {
        if (qerr) throw qerr;
        res.forEach((budgetResult) => {
          query = `
            UPDATE budgets
            SET budget = ${budgetResult.newBudget}
            WHERE userId = ${userId}
            AND categoryId = ${budgetResult.categoryId}
          `;
          conn.query(query, (qerr1) => {
            if (qerr1) throw qerr;
          });
        });
      });
    });
  });
}

module.exports.initialise = () => {
  const sql = 'SELECT userId, period, periodStart FROM users';
  pool.query(sql, (error, results) => {
    if (error) throw error;
    results.forEach((result) => {
      let rule;
      if (result.period === 'MONTH') {
        rule = `0 0 0 ${result.periodStart} * *`; // 00:00 of nth day of MONTH
      } else {
        rule = `0 0 0 * * ${result.periodStart}`; // 00:00 of nth day of WEEK
      }

      schedule.scheduleJob(`${result.userId}`, rule, calculateBudgets.bind(null, result.userId));
    });
  });
};

module.exports.update = (userId) => {
  const sql = `SELECT userId, period, periodStart FROM users WHERE userId = ${userId}`;
  pool.query(sql, (error, results) => {
    if (error) throw error;
    results.forEach((result) => {
      let rule;
      if (result.period === 'MONTH') {
        rule = `0 0 0 ${result.periodStart} * *`; // 00:00 of nth day of MONTH
      } else {
        rule = `0 0 0 * * ${result.periodStart}`; // 00:00 of nth day of WEEK
      }

      schedule.rescheduleJob(schedule.scheduledJobs[userId], rule);
    });
  });
};

module.exports.getJobs = () => (schedule.scheduledJobs);
