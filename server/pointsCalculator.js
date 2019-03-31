const pool = require('./database');

module.exports.calculate = (userId, callback) => {
  pool.getConnection((connErr, conn) => {
    if (connErr) throw connErr;
    let sql = `
        SELECT period, periodStart FROM users WHERE userId = ${userId}
    `;
    conn.query(sql, (err, result) => {
      if (err) throw err;
      const startDate = new Date();
      startDate.setHours(0, 0, 0, 0);
      if (result[0].period === 'MONTH') {
        const currentDate = (new Date()).getDate();
        if (currentDate >= result[0].periodStart) {
          startDate.setDate(result[0].periodStart);
        } else {
          startDate.setDate(result[0].periodStart);
          startDate.setMonth(new Date().getMonth() - 1);
        }
      } else {
        const currentDay = (new Date()).getDay();
        if (currentDay >= result[0].periodStart) {
          const diff = currentDay - result[0].periodStart;
          startDate.setDate(new Date().getDate() - diff);
        } else {
          const diff = result[0].periodStart;
          startDate.setDay(new Date().getDate() + diff);
        }
      }

      sql = `
        SELECT SUM(budget) AS totalBudget, totalSpend, streak
        FROM budgets
        CROSS JOIN (SELECT SUM(amount) AS totalSpend 
                    FROM transactions 
                    WHERE userId = ${userId}
                    AND date BETWEEN '${startDate.getFullYear()}-${(startDate.getMonth() + 1) < 10 ? `0${startDate.getMonth() + 1}` : (startDate.getMonth() + 1)}-${startDate.getDate()}'
                    AND CURDATE()) AS spends
        CROSS JOIN (SELECT streak
                    FROM users
                    WHERE userId = ${userId}) AS streaks
        WHERE userId = ${userId}
      `;
      conn.query(sql, (err1, results1) => {
        if (err1) throw err1;
        // Points calculated as defined in document 'Point System, Streaks and Badges'
        // (https://docs.google.com/document/d/1HsZ711amwSeOx-bBOb1Ed9irpg5xZj25AXx7_-5l8ak/edit#heading=h.kshc3pldosai)
        const remainingBudget = results1[0].totalBudget - results1[0].totalSpend;
        const bonusPoints = results1[0].streak > 1 ? results1[0].streak * 5 - 5 : 0;
        const points = Math.ceil((remainingBudget / results1[0].totalBudget) * 100) + bonusPoints;
        callback(points);
      });
    });
  });
};
