import { SORT_BY_DATE, SORT_BY_AMOUNT } from '../actions/types';

export const defaultFilterState = {
  sortByDate: 'greatest',
  sortByAmount: undefined,
};

export default (state = defaultFilterState, { type }) => {
  switch (type) {
    case SORT_BY_DATE:
      return {
        ...state,
        sortByDate: state.sortByDate === 'greatest' ? 'smallest' : 'greatest',
        sortByAmount: undefined,

      };
    case SORT_BY_AMOUNT:
      return {
        ...state,
        sortByAmount: state.sortByAmount === 'greatest' ? 'smallest' : 'greatest',
        sortByDate: undefined,
      };
    default:
      return state;
  }
};
