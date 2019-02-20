export default (transactions, { sortBy }) => transactions.slice()
  .sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    }
    return a.amount < b.amount ? 1 : -1;
  });
