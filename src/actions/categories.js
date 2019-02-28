import axios from 'axios';
import { SET_CATEGORIES, CATEGORIES_ERROR, CATEGORIES_LOADING } from './types';

export const setCategories = categories => ({
  type: SET_CATEGORIES,
  categories,
});

export const setCategoriesError = status => ({
  type: CATEGORIES_ERROR,
  status,
});
export const setCategoriesLoading = status => ({
  type: CATEGORIES_LOADING,
  status,
});


export const startSetCategories = () => (dispatch, getState) => {
  dispatch(setCategoriesLoading(true));
  const { uid } = getState().auth;
  axios.get(`/api/users/${uid}/categories`)
    .then((payload) => {
      dispatch(setCategories(payload.data));
      dispatch(setCategoriesLoading(false));
    })
    .catch(() => {
      dispatch(setCategoriesLoading(false));
      dispatch(setCategoriesError(true));
    });
};
