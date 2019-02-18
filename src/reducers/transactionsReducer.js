import { SET_TRANSACTIONS } from '../actions/types';

const defaultState = [];

export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_TRANSACTIONS:
      return action.transactions;
    default:
      return state;
  }
};
