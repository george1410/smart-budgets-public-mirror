import { LOGIN, LOGOUT } from '../actions/types';

// TODO get rid of the initial state
// atm by default user is authenticated
// this is for development until real authentication is set up

export default (state = { uid: 123 }, action) => {
// export default (state = { }, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        uid: action.uid,
      };
    case LOGOUT:
      return {};
    default:
      return state;
  }
};
