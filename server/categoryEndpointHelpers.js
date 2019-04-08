function generateCategoryObjects(results, groups) {
  const outArray = [];
  results.forEach((result) => {
    const obj = {
      budget: result.budget,
      spend: 0,
      displayName: result.displayName,
      id: result.id.split(',').map(Number),
    };
    groups.forEach((group) => {
      if (result.displayName === group.displayName) {
        obj.spend = group.spend;
      }
    });
    outArray.push(obj);
  });
  return outArray;
}
exports.generateCategoryObjects = generateCategoryObjects;

function generateCategorySpendSql(req, badRequest, res) {
  let bad = badRequest;
  let sql = `
    SELECT SUM(transactions.amount) AS spend, categories.displayName FROM transactions
    JOIN categories ON transactions.categoryId = categories.categoryId
    WHERE transactions.userId = ${req.params.id} `;
  let { period } = req.query;
  const { periodStart } = req.query;
  period = period.toUpperCase();
  if (period !== 'WEEK' && period !== 'MONTH') {
    bad = true;
    res.status(400).json({ error: 'Bad Request. Invalid period.' });
  }

  const startDate = new Date();
  startDate.setHours(0, 0, 0, 0);
  if (period === 'MONTH') {
    const currentDate = (new Date()).getDate();
    if (currentDate >= periodStart) {
      startDate.setDate(periodStart);
    } else {
      startDate.setDate(periodStart);
      startDate.setMonth(new Date().getMonth() - 1);
    }
  } else {
    const currentDay = (new Date()).getDay();
    if (currentDay >= periodStart) {
      const diff = currentDay - periodStart;
      startDate.setDate(new Date().getDate() - diff);
    } else {
      const diff = periodStart;
      startDate.setDate(new Date().getDate() + diff);
    }
  }

  sql += `
    AND date BETWEEN '${startDate.getFullYear()}-${(startDate.getMonth() + 1) < 10 ? `0${startDate.getMonth() + 1}` : (startDate.getMonth() + 1)}-${startDate.getDate() < 10 ? `0${startDate.getDate()}` : startDate.getDate()}'
    AND CURDATE()
    GROUP BY categories.displayName `;
  return { sql, bad };
}
exports.generateCategorySpendSql = generateCategorySpendSql;
