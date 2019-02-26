import { SET_TRANSACTIONS } from '../actions/types';

export const defaultTransactionsState = [];

export default (state = defaultTransactionsState, action) => {
  switch (action.type) {
    case SET_TRANSACTIONS:
      return action.transactions;
    default:
      return state;
  }
};
