exports.setBudgets = (userId) => {
  const sql = `
        SELECT displayName, ROUND(SUM(amount)/4) 
        FROM transactions 
        JOIN categories 
        ON transactions.categoryId = categories.categoryId 
        WHERE transactions.userId = ${userId}
        AND date BETWEEN DATE_SUB(CURDATE(), INTERVAL 4 MONTH) AND CURDATE() 
        GROUP BY displayName
    `;
};
