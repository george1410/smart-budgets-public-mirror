import { IS_LOADING, HAS_ERRORED } from '../actions/types';

export const defaultStatusState = {
  isLoading: false,
  hasErrored: false,
};

export default (state = defaultStatusState, action) => {
  switch (action.type) {
    case IS_LOADING:
      return {
        ...state,
        isLoading: action.status,
      };
    case HAS_ERRORED:
      return {
        ...state,
        hasErrored: action.status,
      };
    default:
      return state;
  }
};
