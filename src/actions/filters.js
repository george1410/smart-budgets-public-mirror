import {
  SORT_BY_AMOUNT,
  SORT_BY_DATE,
} from './types';

export const sortByAmount = () => ({
  type: SORT_BY_AMOUNT,
});

export const sortByDate = () => ({
  type: SORT_BY_DATE,
});
