import { SET_TRANSACTIONS } from '../types';
import { setTransactions } from '../transactions';
import { transactions } from './data';

describe('transaction actions', () => {
  it('should set up setTransaction action object with data', () => {
    const action = setTransactions(transactions);
    expect(action).toEqual({
      type: SET_TRANSACTIONS,
      transactions,
    });
  });
});
