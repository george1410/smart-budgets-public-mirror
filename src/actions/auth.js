import { LOGIN, LOGOUT } from './types';

export const login = uid => ({
  type: LOGIN,
  uid,
});

export const logout = () => ({
  type: LOGOUT,
});
