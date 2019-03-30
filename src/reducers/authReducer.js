import { AUTHENTICATE, AUTH_ERROR, DEAUTHENTICATE } from '../actions/types';

export const defaultAuthState = {
  authenticated: localStorage.getItem('token') || '',
  uid: localStorage.getItem('uid') || '',
  error: '',
};

export default (state = defaultAuthState, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      return {
        ...state,
        uid: action.payload.uid.toString(),
        authenticated: action.payload.token,
      };
    case DEAUTHENTICATE:
      return {
        authenticated: '',
        uid: '',
        error: '',
      };
    case AUTH_ERROR:
      return {
        ...state,
        error: action.payload.err,
      };
    default:
      return state;
  }
};
