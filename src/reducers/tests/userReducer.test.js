import { SET_USER_INFO } from '../../actions/types';
import userReducer, { defaultUserState } from '../userReducer';
import { user } from './data';

describe('userReducer tests', () => {
  it('should set default user state', () => {
    const state = userReducer(undefined, {});
    expect(state).toEqual(defaultUserState);
  });

  it('should set transactions', () => {
    const action = {
      type: SET_USER_INFO,
      userInfo: user,
    };
    const state = userReducer(undefined, action);
    expect(state).toEqual(user);
  });
});
