import axios from 'axios';
import {
  SET_TRANSACTIONS,
  SET_TRANSACTION_START,
  TRANSACTION_ERROR,
  TRANSACTION_LOADING,
  TRANSACTIONS_HAS_MORE,
  SET_MSG,
} from './types';

export const setTransactions = transactions => ({
  type: SET_TRANSACTIONS,
  transactions,
});

export const setTransactionStart = start => ({
  type: SET_TRANSACTION_START,
  start,
});

export const setTransactionError = status => ({
  type: TRANSACTION_ERROR,
  status,
});

export const setTransactionLoading = status => ({
  type: TRANSACTION_LOADING,
  status,
});

export const setHasMore = status => ({
  type: TRANSACTIONS_HAS_MORE,
  status,
});

export const setTransactionMsg = msg => ({
  type: SET_MSG,
  msg,
});

export const startSetTransactions = () => (dispatch, getState) => {
  dispatch(setTransactionLoading(true));
  const {
    auth: { uid }, transactions: {
      start, count, error, hasMore,
    },
  } = getState();
  dispatch(setTransactionStart(start + count));
  if (!error && hasMore) {
    axios.get(`api/users/${uid}/transactions`, { params: { start, count } })
      .then((payload) => {
        dispatch(setTransactions(payload.data.transactions));
        dispatch(setTransactionLoading(false));
        dispatch(setHasMore(payload.data.hasMore));
      })
      .catch(({ response }) => {
        // error object with a message is also returned
        dispatch(setTransactionLoading(false));
        dispatch(setTransactionError(true));
        dispatch(setHasMore(response.data.hasMore));
      });
  }
};
