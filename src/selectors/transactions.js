export default (transactions, { sortByAmount, sortByDate }) => {
  let filteredTransactions = transactions;
  filteredTransactions = sortByAmount ? transactions.sort((a, b) => (a.amount < b.amount ? -1 : 1)) : filteredTransactions;
  filteredTransactions = sortByDate ? transactions.sort((a, b) => (a.date < b.date ? 1 : -1)) : filteredTransactions;

  return filteredTransactions;
};
