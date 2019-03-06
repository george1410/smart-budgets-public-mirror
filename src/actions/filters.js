import {
  SORT_BY_AMOUNT,
  SORT_BY_DATE,
  TOGGLE_FILTER_DRAWER,
  SET_FILTER_CATEGORY,
  SET_START_DATE,
  SET_END_DATE,
  CLEAR_FILTERS,
} from './types';

export const clearFilters = () => ({
  type: CLEAR_FILTERS,
});

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

export const setStartDate = startDate => ({
  type: SET_START_DATE,
  startDate,
});

export const setEndDate = endDate => ({
  type: SET_END_DATE,
  endDate,
});
