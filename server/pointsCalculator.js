const pool = require('./database');

module.exports.calculate = (userId) => {
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
      // TODO: HERE WE QUERY THE TRANSACTIONS TABLE USING THE STARTDATE.
      /* something along these lines....
        SELECT SUM(budget), totalSpend AS totalBudget 
        FROM budgets
        CROSS JOIN (SELECT SUM(amount) AS totalSpend FROM transactions WHERE userId = 1) AS spends
        WHERE userId = 1
        AND date > 
      */
    });
  });

  const sql = `
        SELECT SUM(budget), totalSpend AS totalBudget 
        FROM budgets
        CROSS JOIN (SELECT SUM(amount) AS totalSpend FROM transactions WHERE userId = 1) AS spends
        WHERE userId = 1
        AND date > 
    `;
};
