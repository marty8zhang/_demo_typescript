/*
 * TypeScript knows the JavaScript language and will generate types for you in many cases.
 * For example, when creating a variable and assigning a value to it in a single statement,
 * TypeScript will implicitly set the variable type for you based on the given value.
 * The below line is the same as `let message: string = ...`.
 */
let message = 'Just a test.';
console.log(typeof message); // string.
// message = 123; // TSError: Type 'number' is not assignable to type 'string'.
message = 'Yet another test.';

// In the below example however, there won't be the implicit type setting.
let test;
test = 123;
console.log(typeof test); // number.
test = false;
console.log(typeof test); // boolean.
