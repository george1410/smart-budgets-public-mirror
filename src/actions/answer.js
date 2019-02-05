import axios from 'axios';
import { FETCH_ANSWER, HAS_ERRORED, IS_LOADING } from './types';

export const isLoading = status => ({
  type: IS_LOADING,
  status,
});

export const hasErrored = status => ({
  type: HAS_ERRORED,
  status,
});

export const fetchAnswer = answer => ({
  type: FETCH_ANSWER,
  answer,
});

export const startFetchAnswer = () => (dispatch) => {
  dispatch(isLoading(true));
  axios.get('https://yesno.wtf/api').then((payload) => {
    // you can see what you actually get back
    console.log(payload.data);
    dispatch(fetchAnswer(payload.data.answer));
    dispatch(isLoading(false));
  }).catch(() => {
    dispatch(isLoading(false));
    dispatch(hasErrored(true));
  });
};
