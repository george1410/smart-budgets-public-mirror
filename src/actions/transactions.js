import api from '../api/api';
import {
  SET_TRANSACTIONS,
  SET_TRANSACTION_START,
  TRANSACTION_ERROR,
  TRANSACTION_LOADING,
  TRANSACTIONS_HAS_MORE,
  CLEAR_TRANSACTIONS,
} from './types';

export const setTransactions = transactions => ({
  type: SET_TRANSACTIONS,
  transactions,
});

export const clearTransactions = () => ({
  type: CLEAR_TRANSACTIONS,
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

// fetches transactions from the server, updating all the necessary
// state variables along the way.
export const startSetTransactions = () => (dispatch, getState) => {
  const {
    auth: { uid }, transactions: {
      start, count, hasMore, error,
    },
    filters: { startDate, endDate },
  } = getState();
  if (hasMore && !error) {
    dispatch(setTransactionLoading(true));
    // increment the starting point for the next fetch;
    dispatch(setTransactionStart(start + count));
    api.get(`api/users/${uid}/transactions`, {
      params: {
        start, count, startDate, endDate,
      },
    })
      .then((payload) => {
        dispatch(setTransactions(payload.data.transactions));
        dispatch(setTransactionLoading(false));
        // if less transactions are returned then hasMore will be false
        dispatch(setHasMore(payload.data.hasMore));
      })
      .catch((err) => {
        // fetch unsuccessul, set the start back to original value at
        // the start of this fetch cycle
        dispatch(setTransactionStart(start));
        dispatch(setTransactionLoading(false));
        dispatch(setTransactionError('Could not fetch any transactions. Check your connection.'));
        if (err.response) {
          dispatch(setHasMore(err.response.data.hasMore));
        }
        // error object with a message is also returned: response.data.message
      });
  }
};
