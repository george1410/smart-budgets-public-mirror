
export default (transactions, { sortByAmount, sortByDate }) => transactions.slice().sort((a, b) => {
  if (sortByAmount === 'greatest') {
    return a.amount < b.amount ? 1 : -1;
  } if (sortByAmount === 'smallest') {
    return a.amount < b.amount ? -1 : 1;
  }
  if (sortByDate === 'smallest') {
    return a.date < b.date ? -1 : 1;
  }
  return a.date < b.date ? 1 : -1;
});
