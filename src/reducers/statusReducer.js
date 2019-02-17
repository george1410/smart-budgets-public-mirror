import { IS_LOADING, HAS_ERRORED } from '../actions/types';

const defaultStatusState = {
  isLoading: false,
  hasErrored: false,
};

export default (state = defaultStatusState, action) => {
  switch (action.type) {
    case IS_LOADING:
      return action.status;
    case HAS_ERRORED:
      return action.status;
    default:
      return state;
  }
};
