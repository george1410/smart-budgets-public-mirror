import {
  HAS_ERRORED,
  IS_LOADING,
} from '../../actions/types';
import statusReducer, { defaultStatusState } from '../statusReducer';

describe('statusReducer tests', () => {
  it('should set default status state', () => {
    const state = statusReducer(undefined, {});
    expect(state).toEqual(defaultStatusState);
  });

  it('should set isLoading', () => {
    const state = statusReducer(undefined, { type: IS_LOADING, status: true });
    expect(state.isLoading).toBe(true);
  });

  it('should set hasErrored', () => {
    const state = statusReducer(undefined, { type: HAS_ERRORED, status: true });
    expect(state.hasErrored).toBe(true);
  });
});
