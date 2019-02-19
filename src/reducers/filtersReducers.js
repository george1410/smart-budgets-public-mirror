import { SORT_BY_DATE, SORT_BY_AMOUNT } from '../actions/types';

const defaultFilterState = {
  sortByAmount: false,
  sortByDate: true,
};

export default (state = defaultFilterState, action) => {
  switch (action.type) {
    case SORT_BY_DATE:
      return {
        ...state,
        sortByDate: !state.filters.sortByDate,
      };
    case SORT_BY_AMOUNT:
      return {
        ...state,
        sortByAmount: !state.filters.sortByAmount,
      };
    default:
      return state;
  }
};
