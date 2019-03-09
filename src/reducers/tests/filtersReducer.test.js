import {
  SORT_BY_AMOUNT,
  SORT_BY_DATE,
  TOGGLE_FILTER_DRAWER,
  SET_FILTER_CATEGORY,
} from '../../actions/types';
import filtersReducer, { defaultFilterState } from '../filtersReducer';

describe('filtersReducer tests', () => {
  it('should set default filter values', () => {
    const state = filtersReducer(undefined, {});
    expect(state).toEqual(defaultFilterState);
  });

  it('should sort by date, oldest/smallest first', () => {
    const action = {
      type: SORT_BY_DATE,
    };
    const state = filtersReducer(undefined, action);
    expect(state.sortByDate).toEqual('smallest');
  });

  it('should sort by date, greatest first after switching twice', () => {
    const action = {
      type: SORT_BY_DATE,
    };
    let state = filtersReducer(undefined, action);
    state = filtersReducer(state, action);
    expect(state.sortByDate).toEqual('greatest');
  });

  it('should sort by amount, greatest first', () => {
    const action = {
      type: SORT_BY_AMOUNT,
    };
    const state = filtersReducer(undefined, action);
    expect(state.sortByAmount).toEqual('greatest');
  });

  it('should sort by amount, smallest first after switching twice', () => {
    const action = {
      type: SORT_BY_AMOUNT,
    };
    let state = filtersReducer(undefined, action);
    state = filtersReducer(state, action);
    expect(state.sortByAmount).toEqual('smallest');
  });

  it('should set other sortBy value to undefined when sorting', () => {
    let state = filtersReducer(undefined, { type: SORT_BY_AMOUNT });
    expect(state.sortByDate).toEqual(undefined);
    state = filtersReducer(state, { type: SORT_BY_DATE });
    expect(state.sortByAmount).toEqual(undefined);
  });
  it('should toggle filterOpen boolean', () => {
    const action = {
      type: TOGGLE_FILTER_DRAWER,
    };
    let state = filtersReducer(undefined, action);
    state = filtersReducer(state, action);
    expect(state.drawerOpen).toBe(false);
  });
  it('should set categories to filter by', () => {
    const shownCategories = [1, 2, 3];
    const action = {
      type: SET_FILTER_CATEGORY,
      shownCategories,
    };
    const state = filtersReducer(undefined, action);
    expect(state.shownCategories).toEqual(shownCategories);
  });
  it('should clear category from shownCategories if already present', () => {
    const shownCategories = [1, 2, 3];
    const action = {
      type: SET_FILTER_CATEGORY,
      shownCategories,
    };
    let state = filtersReducer(undefined, action);
    state = filtersReducer(state, action);
    expect(state.shownCategories).toEqual([]);
  });
});
