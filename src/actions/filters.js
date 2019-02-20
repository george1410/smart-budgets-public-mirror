import {
  SORT_BY_AMOUNT,
  SORT_BY_DATE,
} from './types';

export const sortByAmount = order => ({
  type: SORT_BY_AMOUNT,
  sortByAmountOrder: order,
});

export const sortByDate = order => ({
  type: SORT_BY_DATE,
  sortByDateOrder: order,
});
