/*
 * Define the variable type as a function. Both the parameter list and the return type
 * declarations are mandatory.
 * Note: Parameter names aren't enforced for function typing. Only the number of parameters
 * and their types matter.
 */
let myAdd: (x: number, y: number) => number;

function add(numberOne: number, numberTwo: number) {
  return numberOne + numberTwo;
}
myAdd = add;
console.log(myAdd(1, 2)); // 3.
/*
 * Note that `undefined` and `null` can still be assigned to any type in non-strict mode.
 */
// console.log(myAdd(undefined, null)); // NaN.

function illegalAdd(x: number, y: number) {
  return `${x + y}`;
}
/*
 * TSError: Type '(x: number, y: number) => string' is not assignable to type
 * '(x: number, y: number) => number'.
 */
// myAdd = illegalAdd;

/*
 * Another way of declaring a function type.
 */
let myAdd2: { (x: number, y: number): number; } = add;

/*
 * Yet another way of declaring a function type, or in technically speaking, declaring an
 * interface for a function.
 */
interface Add {
  (x: number, y: number): number;
}
let myAdd3: Add = add;

/*
 * Even though the return type isn't declared, TypeScript will still automatically determine
 * and enforce the return type.
 */
function implicitlyReturnString(message: string) {
  return message;
}
function acceptNumber(number: number) {
  console.log(number);
}
/*
 * TSError: Argument of type 'string' is not assignable to parameter of type 'number'.
 */
// acceptNumber(implicitlyReturnString('test'));

/*
 * There is an exception for the `void` return type that TypeScript won't enforce the actual
 * return type to match with the declared `void` return type.
 * @see https://stackoverflow.com/questions/12761607/typescript-void-return-type-converted-to-any-type
 */
const supposedlyVoidReturningFunction: () => void = (): string => 'This works.';
console.log(supposedlyVoidReturningFunction()); // This works.
