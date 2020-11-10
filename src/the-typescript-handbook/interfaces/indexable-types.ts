interface StringArray {
  /*
   * This syntax is called index Signature. The name - index - here has no effect on its usage,
   * you can name it whatever you like.
   * The below line states that when a `StringArray` is indexed with a number, it must return a
   * string. Note: In strict mode, you're not allowed to use a non-numeric index/key; however, in
   * non-strict mode, you can.
   */
  [index: number]: string;
}

const stringArrayOne: StringArray = ['Apple', 'Banana'];
console.log(stringArrayOne[0]); // Apple.
/*
 * TSError: Type 'boolean' is not assignable to type 'string'.
 */
// stringArrayOne[2] = true;
/*
 * Strict Mode: TSError: Element implicitly has an 'any' type because index expression is not of
 * type 'number'.
 * Non-Strict Mode: No error thrown.
 */
// stringArrayOne['test'] = 1;
// console.log(stringArrayOne); // Non-strict mode output: [ 'Apple', 'Banana', test: 1 ].

interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

// TSError: Numeric index type 'Animal' is not assignable to string index type 'Dog'.
// interface InvalidDuelIndexSignaturesInterface {
//   [x: number]: Animal;
//   [x: string]: Dog;
// }
interface DuelIndexSignaturesInterface {
  [x: string]: Animal;
  [x: number]: Dog;
}

/*
 * TSError:
 *   - Property 'name' of type 'string' is not assignable to string index type 'number'.
 *   - Property 'isActive' of type 'boolean' is not assignable to string index type 'number'.
 */
// interface IndexSignatureWithInvalidPropertiesInterface {
//   [propertyName: string]: number;
//   length: number;
//   name: string;
//   isActive: boolean;
// }
interface IndexSignatureWithUnionPropertyTypes {
  [propertyName: string]: number | string | boolean;
  length: number;
  name: string;
  isActive: boolean;
}

// `readonly` index signatures.
interface ReadonlyStringArray {
  readonly [index: number]: string;
}

const stringArrayTwo: ReadonlyStringArray = ['Alice', 'Bob'];
// TSError: Index signature in type 'ReadonlyStringArray' only permits reading.
// stringArrayTwo[0] = 'John';
// stringArrayTwo[2] = 'Mallory';

interface ReadonlyPropertiesInterface {
  readonly [propertyName: string]: any;
}

const readonlyProperties: ReadonlyPropertiesInterface = {};
// TSError: Index signature in type 'ReadonlyPropertiesInterface' only permits reading.
// readonlyProperties[0] = 'Illegal!';
// readonlyProperties.test = 'Still illegal!';
