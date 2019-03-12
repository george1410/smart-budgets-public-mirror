import { SET_USER_INFO } from '../types';
import { setUserInfo } from '../user';
import { user } from './data';

describe('user actions', () => {
  it('should set up setUserInfo action object with data', () => {
    const action = setUserInfo(user);
    expect(action).toEqual({
      type: SET_USER_INFO,
      userInfo: user,
    });
  });
});
