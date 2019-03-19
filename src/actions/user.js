import {
  SET_USER_INFO,
  USER_INFO_ERROR,
  USER_INFO_LOADING,
  SWITCH_PERIOD,
  SET_START_PERIOD,
} from './types';
import api from '../api/api';
import { startSetCategories } from './categories';

export const setUserInfo = userInfo => ({
  type: SET_USER_INFO,
  userInfo,
});

export const setUserInfoError = status => ({
  type: USER_INFO_ERROR,
  status,
});

export const switchUserPeriods = () => ({
  type: SWITCH_PERIOD,
});

export const pickPeriodStart = periodStart => ({
  type: SET_START_PERIOD,
  periodStart,
});

export const setUserInfoLoading = status => ({
  type: USER_INFO_LOADING,
  status,
});

export const updatePeriod = () => (dispatch, getState) => {
  dispatch(setUserInfoLoading(true));
  const { period } = getState().user;
  const { uid } = getState().auth;
  api.post(`api/users/${uid}/period`, { period })
    .then(() => {
      dispatch(startSetCategories());
      dispatch(setUserInfoLoading(false));
    })
    .catch(() => {
      dispatch(setUserInfoLoading(false));
      dispatch(setUserInfoError(true));
    });
};

export const updatePeriodStart = () => (dispatch, getState) => {
  dispatch(setUserInfoLoading(true));
  const { periodStart } = getState().user;
  const { uid } = getState().auth;
  api.post(`api/users/${uid}/periodStart`, { periodStart })
    .then(() => {
      dispatch(startSetCategories());
      dispatch(setUserInfoLoading(false));
    })
    .catch(() => {
      dispatch(setUserInfoLoading(false));
      dispatch(setUserInfoError(true));
    });
};


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
