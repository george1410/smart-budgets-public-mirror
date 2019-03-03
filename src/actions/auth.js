import { AUTHENTICATE, AUTH_ERROR, DEAUTHENTICATE } from './types';
import { startSetTransactions } from './transactions';
import { startSetCategories } from './categories';
import { startSetUserInfo } from './user';
import api, { logout, login } from '../api/api';

export const authenticate = payload => ({
  type: AUTHENTICATE,
  payload,
});

export const startSignin = (formProps, cb) => async (dispatch) => {
  try {
    const response = await api.post('/auth/signin', formProps);
    dispatch(authenticate(response.data));
    login(response.data.token);
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
  logout();
  return {
    type: DEAUTHENTICATE,
  };
};
