import authReducer, { defaultAuthState } from '../authReducer';
import { AUTHENTICATE, DEAUTHENTICATE, AUTH_ERROR } from '../../actions/types';

describe('authReducer tests', () => {
  it('should set default categories state', () => {
    const state = authReducer(undefined, {});
    expect(state).toEqual(defaultAuthState);
  });

  it('should set uid and token on login', () => {
    const action = {
      type: AUTHENTICATE,
      payload: {
        uid: '123abc',
        token: 'jwt-token',
      },
    };
    const state = authReducer(undefined, action);
    expect(state.authenticated).toEqual(action.payload.token);
    expect(state.uid).toEqual(action.payload.uid);
  });

  it('should clear uid and token on logout', () => {
    const action = {
      type: DEAUTHENTICATE,
    };
    const state = authReducer({ uid: 'abc123', authenticated: 'jwt-token' }, action);
    expect(state.uid).toEqual('');
    expect(state.authenticated).toEqual('');
  });

  it('should set err on auth_error', () => {
    const action = {
      type: AUTH_ERROR,
      payload: {
        err: 'invalid credentials',
      },
    };
    const state = authReducer(undefined, action);
    expect(state.error).toBe(action.payload.err);
  });
});
