import { SET_CATEGORIES } from '../actions/types';

export const defaultCategoriesState = [];

export default (state = defaultCategoriesState, action) => {
  switch (action.type) {
    case SET_CATEGORIES:
      return action.categories;
    default:
      return state;
  }
};
