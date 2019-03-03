import axios from 'axios';
import { SET_CATEGORIES } from './types';
import { isLoading, hasErrored } from './status';
import api from '../api/api';

export const setCategories = categories => ({
  type: SET_CATEGORIES,
  categories,
});

export const startSetCategories = () => (dispatch, getState) => {
  dispatch(isLoading(true));
  const { uid } = getState().auth;
  api.get(`/api/users/${uid}/categories`)
    .then((payload) => {
      dispatch(setCategories(payload.data));
      dispatch(isLoading(false));
    })
    .catch(() => {
      dispatch(isLoading(false));
      dispatch(hasErrored(true));
    });
};
