interface NetworkLoadingState {
  state: 'loading';
}

interface NetworkFailedState {
  state: 'failed';
  code: number;
}

interface NetworkSuccessState {
  state: 'success';
  response: {
    title: string;
    duration: number;
    summary: string;
  };
}

interface NetworkFromCachedState {
  state: 'from_cache';
  id: string
  response: NetworkSuccessState['response']
}

type NetworkState = NetworkLoadingState
  | NetworkFailedState
  | NetworkSuccessState
  | NetworkFromCachedState;

function assertNever(x: never): never {
  throw new Error(`Unexpected object: ${x}`);
}

function logger(s: NetworkState) {
  switch (s.state) {
    case 'loading':
      return 'loading request';
    case 'failed':
      return `failed with code ${s.code}`;
    case 'success':
      return 'got response';
    case 'from_cache':
      return 'got response from cache';
    default:
      /*
       * `assertNever()` acts as a guard function to help prevent logic errors. TypeScript will
       * be smart enough to know if `assertNever()` has a chance to be called with a parameter
       * or not. Because `assertNever()` isn't expected to be called with a parameter, a possible
       * chance then become a `TSError`.
       * For example, if you forgot to add `case 'from_cache'` like above, you'll see:
       * TSError: Argument of type 'NetworkFromCachedState' is not assignable to parameter of
       * type 'never'.
       */
      assertNever(s);
  }

  return 'Unknown state.';
}
