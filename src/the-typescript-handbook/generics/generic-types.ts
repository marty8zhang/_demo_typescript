function identity<T>(arg: T): T {
  return arg;
}

/*
 * Declare generic function types.
 * Similar to declaring ordinary function types, the variable name doesn't matter.
 */
let myIdentity: <U>(arg: U) => U;
myIdentity = identity;

let myIdentity2: { <T>(arg: T): T; } = identity;

interface Identity {
  <T>(arg: T): T;
}
let myIdentity3: Identity = identity;

/*
 * We can also move the generic parameter to be a parameter of the whole interface. This makes
 * the type parameter visible to all the other members of the interface.
 * Note: Instead of describing a generic function, we now have a non-generic function signature
 * that is a part of a generic type. When we use the interface, we now will also need to specify
 * the corresponding type argument.
 */
interface GenericIdentity<T> {
  (arg: T): T;
}
let myIdentity4: GenericIdentity<number> = identity;
/*
 * TSError: Generic type 'GenericIdentity<T>' requires 1 type argument(s).
 */
// let myIdentity5: GenericIdentity = identity;
