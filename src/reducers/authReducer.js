import { AUTHENTICATE, AUTH_ERROR, DEAUTHENTICATE } from '../actions/types';

const defaultState = {
  authenticated: localStorage.getItem('token') || '',
  uid: localStorage.getItem('uid') || '',
  error: '',
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      return {
        ...state,
        uid: action.payload.uid,
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
