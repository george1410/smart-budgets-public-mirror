import {
  SET_FRIENDS,
  FRIENDS_ERROR,
  FRIENDS_LOADING,
  SET_SENT,
  SET_RECEIVED,
  SET_LEADERBOARD_TAB,
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

export const setLeaderboardTab = tab => ({
  type: SET_LEADERBOARD_TAB,
  tab,
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
export const startSetSent = () => (dispatch, getState) => {
  dispatch(setFriendsLoading(true));
  const { uid } = getState().auth;
  api.get(`api/users/${uid}/friends`, { params: { accepted: false, status: 'sent' } })
    .then((payload) => {
      dispatch(setFriendsLoading(false));
      dispatch(setSent(payload.data));
    })
    .catch(() => {
      dispatch(setFriendsLoading(false));
      dispatch(setFriendsError(true));
    });
};

// gets the requests made to the user
export const startSetReceived = () => (dispatch, getState) => {
  dispatch(setFriendsLoading(true));
  const { uid } = getState().auth;
  api.get(`api/users/${uid}/friends`, { params: { accepted: false, status: 'received' } })
    .then((payload) => {
      dispatch(setFriendsLoading(false));
      dispatch(setReceived(payload.data));
    })
    .catch(() => {
      dispatch(setFriendsLoading(false));
      dispatch(setFriendsError(true));
    });
};

// accepts or declines a friend request
export const respondToRequest = (friendId, accepted) => (dispatch, getState) => {
  dispatch(setFriendsLoading(true));
  const { uid } = getState().auth;
  api.post(`api/users/${uid}/friends/${friendId}`, { accepted })
    .then(() => {
      dispatch(setFriendsLoading(false));
      dispatch(startSetReceived());
      dispatch(startSetFriends());
    })
    .catch(() => {
      dispatch(setFriendsLoading(false));
      dispatch(setFriendsError(true));
    });
};

export const removeFriend = fid => (dispatch, getState) => {
  dispatch(setFriendsLoading(true));
  const { uid } = getState().auth;
  api.delete(`api/users/${uid}/friends/${fid}`)
    .then(() => {
      dispatch(setFriendsLoading(false));
      dispatch(startSetFriends());
      dispatch(startSetSent());
    })
    .catch(() => {
      dispatch(setFriendsLoading(false));
      dispatch(setFriendsError(true));
    });
};
