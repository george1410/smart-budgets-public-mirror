import authReducer from '../authReducer';
import { LOGIN, LOGOUT } from '../../actions/types';

describe('authReducer tests', () => {
  it('should set uid on login', () => {
    const action = {
      type: LOGIN,
      uid: '123abc',
    };
    const state = authReducer(undefined, action);
    expect(state.uid).toEqual(action.uid);
  });

  it('should clear uid on logout', () => {
    const action = {
      type: LOGOUT,
    };
    const state = authReducer({ uid: 'abc123' }, action);
    expect(state.uid).toEqual(action.uid);
  });
});
