import {
  SET_CATEGORIES,
} from '../../actions/types';
import { categories } from './data';
import categoriesReducer, { defaultCategoriesState } from '../categoriesReducer';

describe('categoriesReducer tests', () => {
  it('should set default categories state', () => {
    const state = categoriesReducer(undefined, {});
    expect(state).toEqual(defaultCategoriesState);
  });

  it('should set categories', () => {
    const action = {
      type: SET_CATEGORIES,
      categories: [categories[1]],
    };
    const state = categoriesReducer([...categories], action);
    expect(state).toEqual([categories[1]]);
  });
});
