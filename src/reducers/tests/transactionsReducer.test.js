import { SET_TRANSACTIONS } from '../../actions/types';
import transactionReducer, { defaultTransactionsState } from '../transactionsReducer';
import { transactions } from './data';

describe('transactionsReducer tests', () => {
  it('should set default transactions state', () => {
    const state = transactionReducer(undefined, {});
    expect(state).toEqual(defaultTransactionsState);
  });

  it('should set transactions', () => {
    const action = {
      type: SET_TRANSACTIONS,
      transactions,
    };
    const state = transactionReducer(undefined, action);
    expect(state.transactions).toEqual(transactions);
  });
});
