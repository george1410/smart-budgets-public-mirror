import moment from 'moment';
import {
  SORT_BY_DATE,
  SORT_BY_AMOUNT,
  TOGGLE_FILTER_DRAWER,
  SET_FILTER_CATEGORY,
  SET_START_DATE,
  SET_END_DATE,
  CLEAR_FILTERS,
} from '../actions/types';

export const defaultFilterState = {
  sortByDate: 'greatest',
  sortByAmount: undefined,
  drawerOpen: false,
  shownCategories: [],
  startDate: undefined,
  endDate: moment().format('YYYY-MM-DD'),
};

// if not categories set then set all from newCategories
// union two arrays, if present twice, then remove both
const switchCategories = (oldFilters, newFilters) => {
  const arr = oldFilters.concat(newFilters);
  const ret = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (ret.indexOf(arr[i]) !== -1) {
      ret.splice(ret.indexOf(arr[i]), 1);
    } else {
      ret.push(arr[i]);
    }
  }
  return ret;
};

export default (state = defaultFilterState, {
  type, shownCategories, startDate, endDate,
}) => {
  switch (type) {
    case CLEAR_FILTERS:
      return {
        ...defaultFilterState,
      };
    case SORT_BY_DATE:
      return {
        ...state,
        sortByDate: state.sortByDate === 'greatest' ? 'smallest' : 'greatest',
        sortByAmount: undefined,
      };
    case SORT_BY_AMOUNT:
      return {
        ...state,
        sortByAmount: state.sortByAmount === 'greatest' ? 'smallest' : 'greatest',
        sortByDate: undefined,
      };
    case SET_FILTER_CATEGORY:
      return {
        ...state,
        shownCategories: switchCategories(state.shownCategories, shownCategories),
      };
    case TOGGLE_FILTER_DRAWER:
      return {
        ...state,
        drawerOpen: !state.drawerOpen,
      };
    case SET_START_DATE:
      return {
        ...state,
        startDate,
      };
    case SET_END_DATE:
      return {
        ...state,
        endDate,
      };
    default:
      return state;
  }
};
