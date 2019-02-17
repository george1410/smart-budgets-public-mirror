import { SET_CATEGORIES } from '../actions/types';

const defaultState = [];

export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_CATEGORIES:
      return action.categories;
    default:
      return state;
  }
};
