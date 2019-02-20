import { SORT_BY_DATE, SORT_BY_AMOUNT } from '../actions/types';

const defaultFilterState = {
  sortByDate: 'greatest',
  sortByAmount: undefined,
};

export default (state = defaultFilterState, { type, sortByAmountOrder, sortByDateOrder }) => {
  switch (type) {
    case SORT_BY_DATE:
      return {
        ...state,
        sortByDate: sortByDateOrder,
        sortByAmount: undefined,

      };
    case SORT_BY_AMOUNT:
      return {
        ...state,
        sortByAmount: sortByAmountOrder,
        sortByDate: undefined,
      };
    default:
      return state;
  }
};
