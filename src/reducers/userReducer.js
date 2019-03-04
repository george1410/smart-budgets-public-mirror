import { SET_USER_INFO, USER_INFO_LOADING, USER_INFO_ERROR } from '../actions/types';

export const defaultUserState = {
  userInfo: {},
  isLoading: false,
  error: false,
};

export default (state = defaultUserState, action) => {
  switch (action.type) {
    case USER_INFO_LOADING:
      return {
        ...state,
        isLoading: action.status,
      };
    case USER_INFO_ERROR:
      return {
        ...state,
        error: action.status,
      };
    case SET_USER_INFO:
      return {
        ...state,
        userInfo: action.userInfo,
      };
    default:
      return state;
  }
};
