import {
  SORT_BY_AMOUNT,
  SORT_BY_DATE,
  PERIOD,
} from './types';

export const sortByAmount = order => ({
  type: SORT_BY_AMOUNT,
  sortByAmountOrder: order,
});

export const sortByDate = order => ({
  type: SORT_BY_DATE,
  sortByDateOrder: order,
});

export const sortByPeriod = period => ({
  type: PERIOD,
  sortByPeriod: period,
});