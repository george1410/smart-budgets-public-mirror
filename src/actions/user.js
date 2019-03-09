import { SET_USER_INFO, USER_INFO_ERROR, USER_INFO_LOADING } from './types';
import api from '../api/api';

export const setUserInfo = userInfo => ({
  type: SET_USER_INFO,
  userInfo,
});

export const setUserInfoError = status => ({
  type: USER_INFO_ERROR,
  status,
});

export const setUserInfoLoading = status => ({
  type: USER_INFO_LOADING,
  status,
});

export const startSetUserInfo = () => (dispatch, getState) => {
  dispatch(setUserInfoLoading(true));
  const { uid } = getState().auth;
  api.get(`api/users/${uid}`)
    .then((payload) => {
      dispatch(setUserInfo(payload.data));
      dispatch(setUserInfoLoading(false));
    })
    .catch(() => {
      dispatch(setUserInfoLoading(false));
      dispatch(setUserInfoError(true));
    });
};
