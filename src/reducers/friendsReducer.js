import {
  SET_FRIENDS,
  FRIENDS_ERROR,
  FRIENDS_LOADING,
  SET_SENT,
  SET_RECEIVED,
} from '../actions/types';

export const defaultFriendsState = {
  friends: [],
  sent: undefined,
  received: undefined,
  isLoading: false,
  error: false,
};

export default (state = defaultFriendsState, {
  type,
  friends,
  status,
  received,
  sent,
}) => {
  switch (type) {
    case SET_FRIENDS:
      return {
        ...state,
        friends,
      };
    case SET_SENT:
      return {
        ...state,
        sent,
      };
    case SET_RECEIVED:
      return {
        ...state,
        received,
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
