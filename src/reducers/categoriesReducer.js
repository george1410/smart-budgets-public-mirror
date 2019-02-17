import { SET_CATEGORIES } from '../actions/types';

export default (state = { categories: [] }, action) => {
  switch (action.type) {
    case SET_CATEGORIES:
      return {
        categories: action.categories,
      };
    default:
      return state;
  }
};
