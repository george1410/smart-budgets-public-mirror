import axios from 'axios';
import { SET_TRANSACTIONS } from './types';
import { isLoading, hasErrored } from './status';

export const setTransactions = transactions => ({
  type: SET_TRANSACTIONS,
  transactions,
});

export const startSetTransactions = () => (dispatch, getState) => {
  dispatch(isLoading(true));
  const { uid } = getState().auth;
  axios.get(`api/users/${uid}/transactions`)
    .then((payload) => {
      dispatch(setTransactions(payload.data));
      dispatch(isLoading(false));
    })
    .catch(() => {
      dispatch(isLoading(false));
      dispatch(hasErrored(true));
    });
};
