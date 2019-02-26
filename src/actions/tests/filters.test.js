import {
  SORT_BY_AMOUNT,
  SORT_BY_DATE,
} from '../types';
import { sortByDate, sortByAmount } from '../filters';

describe('filter actions', () => {
  it('should generate sortByDate action object', () => {
    const order = 'smallest';
    const action = sortByDate(order);
    expect(action).toEqual({
      type: SORT_BY_DATE,
      sortByDateOrder: order,
    });
  });

  it('should generate sortByAmount action object', () => {
    const order = 'greatest';
    const action = sortByAmount(order);
    expect(action).toEqual({
      type: SORT_BY_AMOUNT,
      sortByAmountOrder: order,
    });
  });
});
