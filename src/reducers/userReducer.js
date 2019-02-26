import { SET_USER_INFO } from '../actions/types';

export const defaultUserState = {};

export default (state = defaultUserState, action) => {
  switch (action.type) {
    case SET_USER_INFO:
      return action.userInfo;
    default:
      return state;
  }
};
