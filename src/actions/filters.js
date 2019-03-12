import {
  SORT_BY_AMOUNT,
  SORT_BY_DATE,
  PERIOD,
  TOGGLE_FILTER_DRAWER,
  TOGGLE_SEARCH_DRAWER,
  SET_FILTER_CATEGORY,
  SET_START_DATE,
  SET_END_DATE,
  CLEAR_FILTERS,
  SET_TEXT_FILTER,
  SET_MIN_AMOUNT,
  SET_MAX_AMOUNT,
} from './types';

export const clearFilters = () => ({
  type: CLEAR_FILTERS,
});

export const setTextFilter = textFilter => ({
  type: SET_TEXT_FILTER,
  textFilter,
});

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
export const toggleFilterDrawer = () => ({
  type: TOGGLE_FILTER_DRAWER,
});

export const toggleSearchDrawer = () => ({
  type: TOGGLE_SEARCH_DRAWER,
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

export const setMinAmount = minAmount => ({
  type: SET_MIN_AMOUNT,
  minAmount,
});

export const setMaxAmount = maxAmount => ({
  type: SET_MAX_AMOUNT,
  maxAmount,
});
