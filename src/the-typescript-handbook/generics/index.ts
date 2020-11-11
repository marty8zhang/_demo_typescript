/*
 * `<T>` acts as a declaration to a type variable. This type variable `T` allows us to capture
 * the type the user provides, so that we can use that information later.
 * For this particular function, we can tell that the return type and the parameter type should
 * be the same.
 */
function identity<T>(arg: T): T {
  return arg;
}
/*
 * Use case 1: Explicitly provide the type.
 */
const outputOne = identity<string>('myString');
/*
 * Use case 2: Let the precompiler to determine the type - type argument inference -.
 * Note: This can cause errors thrown with cases where the type(s) cannot be easily determined.
 */
const outputTwo = identity('myString');
