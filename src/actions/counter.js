import {
  INCREMENT,
  DECREMENT,
  RESET,
  SET,
} from './types';

// Action creators
// they return javascript objects that are passed to the reducers.

export const increment = (incrementBy = 1) => ({
  type: INCREMENT,
  // incrementBy: incrementBy
  // the next line is short-hand for the line above
  incrementBy,
});

export const decrement = (decrementBy = 1) => ({
  type: DECREMENT,
  decrementBy,
});

export const reset = () => ({
  type: RESET,
});

export const set = (setToValue = 0) => ({
  type: SET,
  setToValue,
});
