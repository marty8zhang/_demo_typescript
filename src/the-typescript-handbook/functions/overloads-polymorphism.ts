/*
 * To achieve function polymorphism, you can supply multiple function types for the same
 * function as a list of overloads.
 * Notes:
 *   - The list must be provided right before the function, except that there can be empty lines
 *     among them.
 *   - In order for the compiler to pick the correct type check, TypeScript looks at the overload
 *     list and proceeding with the first overload, attempts to call the function with the provided
 *     parameters. If it finds a match, it picks this overload as the correct overload. Hence,
 *     we should order overloads from most specific to least specific.
 */
function sum (x: number, y: number, ...restNumbers: number[]): number;
function sum (numbers: number[]): number;
function sum(parameterOne: any, ...restParameters: number[]): any {
  if (typeof parameterOne === 'number') {
    return restParameters.reduce(
      (result: number, currentNumber: number): number => result + currentNumber,
      parameterOne,
    );
  }

  if (Array.isArray(parameterOne)) {
    return parameterOne.reduce(
      (result: number, currentNumber: number): number => result + currentNumber,
      0,
    );
  }

  return null;
}

console.log(sum(1, 2)); // 3.
console.log(sum(3, 4, 5, 6)); // 18.
console.log(sum([7, 8, 9])); // 24.
/*
 * Note that the actual function doesn't count as an overload. You'll have to declare an
 * additional function type in order to directly use the function in the form of its own
 * signature.
 * TSError: Argument of type 'number[]' is not assignable to parameter of type 'number'.
 */
// console.log(sum(10, [11, 12]));

/*
 * Similar to Java, you can't overload a function with function types among which their only
 * difference is the return type. TypeScript seems to be ignoring the latter function types
 * with this type of overloading, whereas Java will throw a compilation error.
 * In other words, the return type in method overloading doesn't matter, so long the return
 * type of the actual function is flexible enough.
 */
function convert(number: number, type: string): string;
// function convert(number: number, type: string): number; // This has no effect and is redundant.
function convert(number: number, converter: (number: number) => any): any;
function convert(number: number, type: string|((number: number) => any)): any {
  if (type === 'string') {
    return `${number}`;
  }

  if (type === 'integer') {
    return Math.round(number);
  }

  if (type === 'float') {
    return number.toFixed(2);
  }

  if (typeof type === 'function') {
    return type(number);
  }

  console.log(`The given type "${type}" isn't accepted.`);
  return null;
}

console.log(typeof convert(13, 'string')); // string.
console.log(convert(14.1, 'integer')); // 14.
console.log(convert(15, 'float')); // 15.00.
console.log(convert(16, (number) => number.toFixed(4))); // 16.0000.
// The given type "invalid-type-string" isn't accepted.
// null.
console.log(convert(17, 'invalid-type-string'));
