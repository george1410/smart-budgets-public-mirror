import { FETCH_ANSWER, IS_LOADING, HAS_ERRORED } from '../actions/types';

export const defaultState = {
  answer: '',
  isLoading: false,
  hasErrored: false,
};

export default (state = defaultState, { type, status, answer }) => {
  switch (type) {
    case FETCH_ANSWER:
      return { ...state, answer };
    case IS_LOADING:
      return { ...state, isLoading: status };
    case HAS_ERRORED:
      return { ...state, hasErrored: status };
    default:
      return state;
  }
};
