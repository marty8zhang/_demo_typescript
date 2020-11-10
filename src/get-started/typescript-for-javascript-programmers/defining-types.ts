// Annotate types in `interface`s.
interface User {
  name: string;
  id: number;
}

// Annotate types in `class`s.
class UserAccount {
  name: string;

  id: number;

  // This is valid but useless. You can only assign it with `null` or `undefined` afterwards.
  undefinedField: undefined;

  // This is valid but useless. You can only assign it with `null` or `undefined` afterwards.
  nullField: null;

  // This is valid but useless. You can only assign it with `null` or `undefined` afterwards.
  voidField: void;

  // `unknown` makes a variable can be any type.
  unknownField: unknown;

  anyField: any;

  constructor(
    name: string,
    id: number,
  ) {
    this.name = name;
    this.id = id;

    // this.undefinedField = 123; // TSError: Type '123' is not assignable to type 'undefined'.
    // this.nullField = 123; // TSError: Type '123' is not assignable to type 'null'.
    this.unknownField = 123; // No error thrown.
    this.unknownField = 'test';

    this.anyField = 123;
    this.anyField = 'test';

    // Whereas `unknown` is still a type with "masking", `any` basically opts out of TypeScript
    // checking/restrictions and will be run as vanilla JavaScript code.
    console.log(typeof this.unknownField); // string.
    // TSError: Property 'toUpperCase' does not exist on type 'unknown'.
    // console.log(this.unknownField.toUpperCase());
    console.log(this.anyField.toUpperCase()); // TEST.
    // The below code won't be checked by TypeScript and will be directly executed by the
    // JavaScript engine. Hence, a JavaScript `TypeError` will be thrown.
    // TypeError: this.anyField.justATest is not a function.
    // console.log(this.anyField.justATest());
    // Properties of an `any` object will also be with the `any` type.
    // The below code is the same as: `const anyVariable: any;`
    const anyVariable = this.anyField.nonExistingProperty;
  }
}

// Annotate types for variables.
const userOne: User = new UserAccount('Murphy', 1);
// Output: TSError: Property 'unknownField' does not exist on type 'User'.
// console.log(userOne.unknownField);
// const userTwo = new UserAccount('Two', 2);
// console.log(userTwo.unknownField); // 123.

// Annotate types for function return values.
function getAdminUser(): User {
  // ...

  return new UserAccount('Admin', 0);
}

// Annotate types for function parameters.
function deleteUser(user: User) {
  // ...
}

// Tuple types allow you to express an array with a fixed number of elements whose types are known.
/* eslint-disable prefer-const */
let testTuple: [string, number];
testTuple = ['hello', 10];
console.log(testTuple[0].substring(1)); // ello.
// TSError: Property 'substring' does not exist on type 'number'.
// console.log(testTuple[1].substring(1));
// TSError: Type 'number' is not assignable to type 'string'.
// TSError: Type 'string' is not assignable to type 'number'.
// testTuple = [10, 'hello'];
// TSError: Type '"world"' is not assignable to type 'undefined'.
// TSError: Tuple type '[string, number]' of length '2' has no element at index '3'.
// testTuple[3] = "world";
/* eslint-enable */

enum Colour {
  Red,
  Green = 3, // Setting a value also affects the subsequent values.
  Blue,
  Yellow,
  Magenta = 9,
  Cyan,
  White,
  // No error thrown for non-numeric values.
  // The name can be used normally, but you can't search for the name using the value.
  Invalid = 'test',
  // If the same value has been (explicitly/implicitly) assign more than once, the last one on the
  // list will override its former(s).
  ReplacedMagenta = 9,
}
console.log(Colour.Red); // 0.
/* eslint-disable-next-line */
console.log(Colour['Blue']); // 4.
console.log(Colour.Yellow); // 5.
console.log(Colour.Cyan); // 10.
console.log(Colour.White); // 11.
const myColour: Colour = Colour.Blue;
console.log(myColour); // 4.
const colourName: string = Colour[10];
console.log(colourName); // Cyan.
console.log(Colour[9]); // ReplacedMagenta.
console.log(Colour[2]); // undefined.
/* eslint-disable-next-line */
console.log(Colour.Invalid); // test.
/*
 * TSError: Element implicitly has an 'any' type because index expression is not of type 'number'.
 */
// console.log(Colour['test']);
