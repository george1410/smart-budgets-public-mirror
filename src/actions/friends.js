import {
  SET_FRIENDS,
  FRIENDS_ERROR,
  FRIENDS_LOADING,
} from './types';
import api from '../api/api';

export const setFriendsLoading = status => ({
  type: FRIENDS_LOADING,
  status,
});

export const setFriendsError = status => ({
  type: FRIENDS_ERROR,
  status,
});

export const setFriends = friends => ({
  type: SET_FRIENDS,
  friends,
});


// TODO get all users friends as objects i.e:
// { userId, firstName, lastName, points, etc...}

export const startSetFriends = () => (dispatch, getState) => {
  dispatch(setFriendsLoading(true));
  const { uid } = getState().auth;
  api.get(`api/users/${uid}/friends`)
    .then((payload) => {
      dispatch(setFriendsLoading(false));
      dispatch(setFriends(payload.data));
    })
    .catch(() => {
      dispatch(setFriendsLoading(false));
      dispatch(setFriendsError(true));
    });
};
