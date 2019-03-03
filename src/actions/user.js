import api from '../api/api';
import { SET_USER_INFO } from './types';
import { isLoading, hasErrored } from './status';

export const setUserInfo = userInfo => ({
  type: SET_USER_INFO,
  userInfo,
});

export const startSetUserInfo = () => (dispatch, getState) => {
  dispatch(isLoading(true));
  const { uid } = getState().auth;
  api.get(`api/users/${uid}`)
    .then((payload) => {
      dispatch(setUserInfo(payload.data));
      dispatch(isLoading(false));
    })
    .catch(() => {
      dispatch(isLoading(false));
      dispatch(hasErrored(true));
    });
};
