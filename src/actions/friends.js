import {
  SET_FRIENDS,
  FRIENDS_ERROR,
  FRIENDS_LOADING,
  SET_SENT,
  SET_RECEIVED,
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

export const setSent = sent => ({
  type: SET_SENT,
  sent,
});

export const setReceived = received => ({
  type: SET_RECEIVED,
  received,
});

// gets friends who have accepted the request
export const startSetFriends = () => (dispatch, getState) => {
  dispatch(setFriendsLoading(true));
  const { uid } = getState().auth;
  api.get(`api/users/${uid}/friends`, { params: { accepted: true } })
    .then((payload) => {
      dispatch(setFriendsLoading(false));
      dispatch(setFriends(payload.data));
    })
    .catch(() => {
      dispatch(setFriendsLoading(false));
      dispatch(setFriendsError(true));
    });
};

// Gets friends who have received a friend request from the user
// export const startSetSent= () => (dispatch, getState) => {
//   dispatch(setFriendsLoading(true));
//   const { uid } = getState().auth;
//   api.get(`api/users/${uid}/friends`, { params: { accepted: false } })
//     .then((payload) => {
//       dispatch(setFriendsLoading(false));
//       dispatch(setSent(payload.data));
//     })
//     .catch(() => {
//       dispatch(setFriendsLoading(false));
//       dispatch(setFriendsError(true));
//     });
// };

// gets the requests made to the user
// export const startSetReceived = () => (dispatch, getState) => {
//   dispatch(setFriendsLoading(true));
//   const { uid } = getState().auth;
//   api.get(`api/users/${uid}/friends`, { params: { accepted: false } })
//     .then((payload) => {
//       dispatch(setFriendsLoading(false));
//       dispatch(setReceived(payload.data));
//     })
//     .catch(() => {
//       dispatch(setFriendsLoading(false));
//       dispatch(setFriendsError(true));
//     });
// };
