import {
  SET_FILTER_CATEGORY,
  SORT_BY_AMOUNT,
  SORT_BY_DATE,
  TOGGLE_FILTER_DRAWER,
} from '../types';
import {
  setFilterCategory,
  sortByAmount,
  sortByDate,
  toggleFilterDrawer,
} from '../filters';

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
  it('should generate toggleFilterDrawer action object', () => {
    const action = toggleFilterDrawer();
    expect(action).toEqual({
      type: TOGGLE_FILTER_DRAWER,
    });
  });
  it('should generate setFilterCategory action object', () => {
    const shownCategories = [1, 2, 3];
    const action = setFilterCategory(shownCategories);
    expect(action).toEqual({
      type: SET_FILTER_CATEGORY,
      shownCategories,
    });
  });
});
