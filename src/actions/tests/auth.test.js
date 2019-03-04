import { AUTHENTICATE, DEAUTHENTICATE, AUTH_ERROR } from '../types';
import { authenticate, signout, authError } from '../auth';

describe('auth actions', () => {
  it('should generate authenticate action object', () => {
    const payload = {
      uid: '1',
      token: 'jwt-token',
    };
    const action = authenticate(payload);
    expect(action).toEqual({
      type: AUTHENTICATE,
      payload,
    });
  });

  it('should generate auth_error action object', () => {
    const err = 'error';
    const action = authError(err);
    expect(action).toEqual({
      type: AUTH_ERROR,
      err,
    });
  });

  it('should generate signout action object', () => {
    const action = signout();
    expect(action).toEqual({
      type: DEAUTHENTICATE,
    });
  });
});
