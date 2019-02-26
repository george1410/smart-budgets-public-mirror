import { HAS_ERRORED, IS_LOADING } from '../types';
import { isLoading, hasErrored } from '../status';

describe('status actions', () => {
  it('should generate isLoading action object', () => {
    const action = isLoading();
    expect(action).toEqual({
      type: IS_LOADING,
    });
  });

  it('should generate hasErrored action object', () => {
    const action = hasErrored();
    expect(action).toEqual({
      type: HAS_ERRORED,
    });
  });
});
