interface FunctionTypesInterface {
  (parameterOne: number, parameterTwo: number): number;
}

const max: FunctionTypesInterface = (
  parameterOne: number, parameterTwo: number,
): number => (parameterOne >= parameterTwo ? parameterOne : parameterTwo);
console.log(max(1.12, 1.121)); // 1.121.

/*
 * For function types to correctly type check, the names of the parameters do not need to match.
 * Also, while defining the function, you can skip defining the data types for parameters and the
 * return value, and TypeScript will do the type checking for you.
 */
const add: FunctionTypesInterface = (param1, param2) => param1 + param2;
console.log(add(1.1, 2.2)); // 3.3...
// TSError: Argument of type 'boolean' is not assignable to parameter of type 'number'.
// console.log(add(1, false));
// TSError: Type 'string' is not assignable to type 'number'.
// const invalidFunction: FunctionTypesInterface = (p1, p2) => 'Test';
