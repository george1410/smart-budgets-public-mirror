import {
  SET_TRANSACTIONS,
  SET_TRANSACTION_START,
  TRANSACTION_LOADING,
  TRANSACTION_ERROR,
  TRANSACTIONS_HAS_MORE,
} from '../actions/types';

export const defaultTransactionsState = {
  transactions: [],
  start: 0,
  count: 50,
  error: '',
  isLoading: false,
  hasMore: true,
};

export default (state = defaultTransactionsState, action) => {
  switch (action.type) {
    case SET_TRANSACTION_START:
      return {
        ...state,
        start: action.start,
      };
    case TRANSACTIONS_HAS_MORE:
      return {
        ...state,
        hasMore: action.status,
      };
    case TRANSACTION_ERROR:
      return {
        ...state,
        error: action.status,
      };
    case TRANSACTION_LOADING:
      return {
        ...state,
        isLoading: action.status,
      };
    case SET_TRANSACTIONS:
      if (state.start === 0) {
        return {
          ...state,
          transactions: action.transactions,
        };
      } if (!state.error) {
        return {
          ...state,
          transactions: state.transactions.concat(action.transactions),
        };
      }
      return state;
    default:
      return state;
  }
};
