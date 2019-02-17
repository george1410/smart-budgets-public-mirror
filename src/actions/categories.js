import axios from 'axios';
import { SET_CATEGORIES } from './types';

export const setCategories = categories => ({
  type: SET_CATEGORIES,
  categories,
});

export const startSetCategories = () => (dispatch, getState) => {
  const { uid } = getState().auth;
  axios.get(`api/users/${uid}/categories`).then((payload) => {
    dispatch(setCategories(payload.data));
  });
};
