import {
  SORT_BY_AMOUNT,
  SORT_BY_DATE,
  TOGGLE_FILTER_DRAWER,
  SET_FILTER_CATEGORY,
} from './types';

export const sortByAmount = order => ({
  type: SORT_BY_AMOUNT,
  sortByAmountOrder: order,
});

export const sortByDate = order => ({
  type: SORT_BY_DATE,
  sortByDateOrder: order,
});

export const toggleFilterDrawer = () => ({
  type: TOGGLE_FILTER_DRAWER,
});

export const setFilterCategory = shownCategories => ({
  type: SET_FILTER_CATEGORY,
  shownCategories,
});
