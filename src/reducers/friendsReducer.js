import {
  SET_FRIENDS,
  FRIENDS_ERROR,
  FRIENDS_LOADING,
} from '../actions/types';

export const defaultFriendsState = {};

export default (state = defaultFriendsState, { type, friends, status }) => {
  switch (type) {
    case SET_FRIENDS:
      return {
        ...friends,
      };
    case FRIENDS_ERROR:
      return {
        ...state,
        error: status,
      };
    case FRIENDS_LOADING:
      return {
        ...state,
        isLoading: status,
      };
    default:
      return state;
  }
};
