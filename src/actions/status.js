import { IS_LOADING, HAS_ERRORED } from './types';

export const isLoading = status => ({
  type: IS_LOADING,
  status,
});

export const hasErrored = status => ({
  type: HAS_ERRORED,
  status,
});
