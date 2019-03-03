import axios from 'axios';
import { AUTHENTICATE, AUTH_ERROR, DEAUTHENTICATE } from './types';
import { startSetTransactions } from './transactions';
import { startSetCategories } from './categories';
import { startSetUserInfo } from './user';

export const authenticate = payload => ({
  type: AUTHENTICATE,
  payload,
});

export const startSignin = (formProps, cb) => async (dispatch) => {
  try {
    const response = await axios.post('/auth/signin', formProps);
    dispatch(authenticate(response.data));
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('uid', response.data.uid);
    dispatch(startSetTransactions());
    dispatch(startSetCategories());
    dispatch(startSetUserInfo());
    cb();
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: { err: 'Invalid login details.' } });
  }
};

export const signout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('uid');
  return {
    type: DEAUTHENTICATE,
  };
};
