import {
  INCREMENT, DECREMENT, RESET, SET,
} from '../actions/types';

// reducer is basically a switch statement that returns an object based on action.type.

// the functions need to be pure, i.e. no mutations

// return { count: state.count+1 } returns new count that is one more than the previous count <-- this is pure
// count++ <-- is not pure, redux expects a new state back if there is a change and not a change to the current state.

export default (state = { count: 0 }, action = { incrementBy: 5 }) => {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + action.incrementBy,
      };
    case DECREMENT:
      return {
        count: state.count - action.decrementBy,
      };
    case RESET:
      return {
        count: 0,
      };
    case SET:
      return {
        count: action.setToValue,
      };
    default:
      return state;
  }
};
