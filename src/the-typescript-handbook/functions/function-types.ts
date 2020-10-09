/*
 * Define the variable type as a function. Both the parameter list and the return type
 * declarations are mandatory.
 * Note: Parameter names aren't enforced for function typing. Only the number of parameters
 * and their types matter.
 */
let myAdd: (x: number, y: number) => number;

function add(numberOne, numberTwo) {
  return numberOne + numberTwo;
}
myAdd = add;
console.log(myAdd(1, 2)); // 3.
/*
 * Note that `undefined` and `null` can still be assigned to any type.
 */
console.log(myAdd(undefined, null)); // NaN.

function illegalAdd(x: number, y: number) {
  return `${x + y}`;
}
/*
 * TSError: Type '(x: number, y: number) => string' is not assignable to type
 * '(x: number, y: number) => number'.
 */
// myAdd = illegalAdd;

/*
 * There is an exception for the `void` return type that TypeScript won't enforce the actual
 * return type to match with the declared `void` return type.
 * @see https://stackoverflow.com/questions/12761607/typescript-void-return-type-converted-to-any-type
 */
const supposedlyVoidReturningFunction: () => void = (): string => 'This works.';
console.log(supposedlyVoidReturningFunction()); // This works.
