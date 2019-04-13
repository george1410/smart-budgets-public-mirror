const schedule = require('node-schedule');
const pool = require('./database');

function update(userId) {
  const sql = `SELECT userId, period, periodStart FROM users WHERE userId = ${userId}`;
  pool.query(sql, (error, results) => {
    if (error) throw error;
    results.forEach((result) => {
      let rule;
      if (result.period === 'MONTH') {
        let day = result.periodStart;

        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth();
        const nextMonth = currentMonth + 1;

        switch (nextMonth) {
          case 3: // April
          case 5: // June
          case 10:// November
          case 8: // September
            day = day > 30 ? 30 : day;
            break;
          case 1: // February
            if (
              ((currentYear % 4 === 0) && (currentYear % 100 !== 0)) || (currentYear % 400 === 0)
            ) {
              // is leap year - feb has 29 days
              day = day > 29 ? 29 : day;
            } else {
              // not leap year - feb has 28 days
              day = day > 28 ? 28 : day;
            }
            break;
          default:
            break;
        }
        rule = `0 0 0 ${day} * *`; // 00:00 of nth day of MONTH
      } else {
        rule = `0 0 0 * * ${result.periodStart}`; // 00:00 of nth day of WEEK
      }

      schedule.rescheduleJob(schedule.scheduledJobs[userId], rule);
    });
  });
}

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
        UPDATE users SET streak =
        CASE WHEN (SELECT SUM(budget) AS totalBudget
              FROM budgets
              WHERE userId = ${userId}) > (SELECT SUM(amount) AS totalSpend
                          FROM transactions
                          WHERE userId = ${userId}
                          AND date BETWEEN DATE_SUB(CURDATE(), INTERVAL 4 ${period})
                          AND CURDATE()) THEN streak + 1 ELSE 0 END
        WHERE userId = ${userId}
      `;
      conn.query(query, (er) => {
        if (er) throw er;
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
            let count = 0;
            res1.forEach((budgetResult) => {
              query = `
                UPDATE budgets
                SET budget = ${budgetResult.newBudget}
                WHERE userId = ${userId}
                AND categoryId = ${budgetResult.categoryId}
              `;
              conn.query(query, (qerr1) => {
                if (qerr1) throw qerr;
                count += 1;
                if (count === res1.length) {
                  conn.release();
                }
              });
            });
            update(userId);
          });
        });
      });
    });
  });
}

function resetPeriod(userId) {
  pool.getConnection((connErr, conn) => {
    if (connErr) throw connErr;
    let sql = `
      SELECT period, newPeriod FROM users WHERE userId = ${userId}
    `;
    conn.query(sql, (err, result) => {
      if (err) throw err;
      if (result[0].period !== result[0].newPeriod) {
        let resetDay;
        if (result[0].newPeriod === 'WEEK') {
          resetDay = (new Date()).getDay();
        } else {
          resetDay = (new Date()).getDate();
        }
        sql = `
          UPDATE users
          SET period = '${result[0].newPeriod}',
              periodStart = ${resetDay}
          WHERE userId = ${userId}
        `;
        conn.query(sql, (err1) => {
          if (err1) throw err1;
          conn.release();
          calculateBudgets(userId);
        });
      } else {
        conn.release();
        calculateBudgets(userId);
      }
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

      schedule.scheduleJob(`${result.userId}`, rule, resetPeriod.bind(null, result.userId));
    });
  });
};

module.exports.getJobs = () => (schedule.scheduledJobs);
