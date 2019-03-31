const schedule = require('node-schedule');
const pool = require('./database');

function calculateBudgets(userId) {
  let query = `
    SELECT period
    FROM users
    WHERE userId = ${userId}
  `;
  pool.getConnection((connErr, conn) => {
    if (connErr) throw connErr;
    conn.query(query, (err, res) => {
      const { period } = res[0];
      query = `
        SELECT categories.categoryId, ROUND(SUM(amount)/4) AS newBudget
        FROM transactions 
        JOIN categories 
        ON transactions.categoryId = categories.categoryId 
        WHERE transactions.userId = ${userId}
        AND date BETWEEN DATE_SUB(CURDATE(), INTERVAL 4 ${period}) AND CURDATE()
        GROUP BY categoryId 
      `;
      conn.query(query, (err1, res1) => {
        if (err1) throw err1;
        query = `
          UPDATE budgets
          SET budget = 0
          WHERE userId = ${userId}
        `;
        conn.query(query, (qerr) => {
          if (qerr) throw qerr;
          res1.forEach((budgetResult) => {
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
