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
  period = period.toUpperCase();
  if (period !== 'WEEK' && period !== 'MONTH') {
    bad = true;
    res.status(400).json({ error: 'Bad Request. Invalid period.' });
  }
  sql += `
    AND ${period}(transactions.date) = ${period}(CURDATE()) 
    AND YEAR(transactions.date) = YEAR(CURDATE())  
    AND transactions.date <= CURDATE()
    GROUP BY categories.displayName `;
  return { sql, bad };
}
exports.generateCategorySpendSql = generateCategorySpendSql;
