/*
 * Unions can help with flattening the software structure so that you don't usually need base
 * interfaces/classes.
 * A common technique for working with unions is to have a single field which uses literal
 * types which you can use to let TypeScript narrow down the possible current type.
 */
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

interface InvalidState {
  test: false;
}

type NetworkState = NetworkLoadingState
  | NetworkFailedState
  | NetworkSuccessState
  | InvalidState;

/*
 * A more traditional OO version.
 * Pros of the previous version:
 *   - Very intuitive to see what's a possible `NetworkState` without the need to rely on IDE
 *     or a text search, e.g., search what "extends NetworkState".
 * Cons:
 *   - Having a common field like `state` isn't a constraint, hence something like `InvalidState`
 *     above can sneak in, which can potentially cause a logic error.
 */
// interface NetworkState {
//   state: string;
// }
//
// interface NetworkLoadingState extends NetworkState {
//   state: 'loading';
// }
//
// interface NetworkFailedState extends NetworkState {
//   state: 'failed';
//   code: number;
// }
//
// interface NetworkSuccessState extends NetworkState {
//   state: 'success';
//   response: {
//     // ...
//   };
// }
