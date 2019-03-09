import { SET_CATEGORIES, CATEGORIES_ERROR, CATEGORIES_LOADING } from '../actions/types';

export const defaultCategoriesState = {
  categories: [],
  isLoading: false,
  error: false,
};

export default (state = defaultCategoriesState, action) => {
  switch (action.type) {
    case CATEGORIES_ERROR:
      return {
        ...state,
        error: action.status,
      };
    case CATEGORIES_LOADING:
      return {
        ...state,
        isLoading: action.status,
      };
    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.categories,
      };
    default:
      return state;
  }
};
