import {
  SORT_BY_DATE,
  SORT_BY_AMOUNT,
  TOGGLE_FILTER_DRAWER,
  SET_FILTER_CATEGORY,
} from '../actions/types';

export const defaultFilterState = {
  sortByDate: 'greatest',
  sortByAmount: undefined,
  drawerOpen: false,
  shownCategories: [],
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

export default (state = defaultFilterState, { type, shownCategories }) => {
  switch (type) {
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
    default:
      return state;
  }
};
