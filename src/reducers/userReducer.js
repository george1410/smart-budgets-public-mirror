import {
  SET_USER_INFO,
  USER_INFO_LOADING,
  USER_INFO_ERROR,
  SWITCH_PERIOD,
  SET_START_PERIOD,
} from '../actions/types';

export const defaultUserState = {
  isLoading: false,
  error: false,
  period: '',
  periodStart: undefined,
};

export default (state = defaultUserState, action) => {
  switch (action.type) {
    case USER_INFO_LOADING:
      return {
        ...state,
        isLoading: action.status,
      };
    case USER_INFO_ERROR:
      return {
        ...state,
        error: action.status,
      };
    case SET_USER_INFO:
      return {
        ...state,
        ...action.userInfo,
      };
    case SET_START_PERIOD:
      return {
        ...state,
        periodStart: action.periodStart,
      };
    default:
      return state;

    case SWITCH_PERIOD:
      return {
        ...state,
        period: state.period === 'MONTH' ? 'WEEK' : 'MONTH',
      };
  }
};
