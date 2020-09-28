interface StringArray {
  /*
   * This syntax is called index Signature. The name - index - here has no effect on its usage,
   * you can name it whatever you like.
   * The below line states that when (not necessarily) a `StringArray` is indexed with a number,
   * it will return a string.
   */
  [index: number]: string;
}

const stringArrayOne: StringArray = ['Apple', 'Banana'];
console.log(stringArrayOne[0]); // Apple.
// stringArrayOne[2] = true; // TSError: Type 'boolean' is not assignable to type 'string'.
// Non-number index however is not restricted, hence no error thrown.
stringArrayOne['test'] = 1; // eslint-disable-line
console.log(stringArrayOne); // [ 'Apple', 'Banana', test: 1 ].

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
stringArrayTwo['test'] = 'It still works.' // eslint-disable-line

interface ReadonlyPropertiesInterface {
  readonly [propertyName: string]: any;
}

const readonlyProperties: ReadonlyPropertiesInterface = {};
// TSError: Index signature in type 'ReadonlyPropertiesInterface' only permits reading.
// readonlyProperties[0] = 'Illegal!';
// readonlyProperties.test = 'Still illegal!';
