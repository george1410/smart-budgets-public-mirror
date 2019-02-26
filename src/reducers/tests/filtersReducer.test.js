import {
  SORT_BY_AMOUNT,
  SORT_BY_DATE,
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

  it('when sorting, should set other sortBy value to undefined', () => {
    let state = filtersReducer(undefined, { type: SORT_BY_AMOUNT });
    expect(state.sortByDate).toEqual(undefined);
    state = filtersReducer(state, { type: SORT_BY_DATE });
    expect(state.sortByAmount).toEqual(undefined);
  });
});
