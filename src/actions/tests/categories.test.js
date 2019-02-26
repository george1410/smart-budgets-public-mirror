import { SET_CATEGORIES } from '../types';
import { setCategories } from '../categories';
import { categories } from './data';

describe('category actions', () => {
  it('should set up setCategories action object with data', () => {
    const action = setCategories(categories);
    expect(action).toEqual({
      type: SET_CATEGORIES,
      categories,
    });
  });
});
