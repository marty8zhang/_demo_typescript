// JavaScript array 101.
const anArray = [1, 2];
console.log(typeof anArray); // object.
console.log(Array.isArray(anArray)); // true.

class ClassA {}
interface InterfaceB {
  b: number;
}

// Unions. You can define your own type which can be a union of several types.
type MyType = true | false | 'test' | 1 | 7 | [] | ClassA | InterfaceB;
const myType1: MyType = false;
const myType2: MyType = 'test';
const myType3: MyType = 1;
const myType4: MyType = [];
const myType5: MyType = new ClassA();
const myType6: MyType = { b: 1.1 };
// const myType7: MyType = [2]; // TSError: Type 'number' is not assignable to type 'undefined'.
// const myType8: MyType = 'a'; // TSError: Type '"a"' is not assignable to type 'MyType'.

function getLength(obj: string | string[]) {
  return obj.length;
}
console.log(getLength('test')); // 4.
console.log(getLength(['a', 'b'])); // 2.

// Generics. Generics describe what value type(s) a collection/interface can contain.
type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;
type StringNumberArray = Array<string|number>;
const stringArray1: StringArray = ['a'];
// TSError: Type 'number' is not assignable to type 'string'.
// const stringArray2: StringArray = [1];
const numberArray1: NumberArray = [1];
// TSError: Type 'string' is not assignable to type 'number'.
// const numberArray2: NumberArray = ['a'];
const objectWithNameArray1: ObjectWithNameArray = [{ name: 'Tester' }];
// TSError: Type '{ name: string; age: number; }' is not assignable to type '{ name: string; }'.
// const objectWithNameArray2: ObjectWithNameArray = [{ name: 'Tester', age: 99 }];
// TSError: Property 'name' is missing in type '{}' but required in type '{ name: string; }'.
// const objectWithNameArray3: ObjectWithNameArray = [{ }];
const stringNumberArray1: StringNumberArray = [1, 'a', 'test'];
// TSError: Type 'boolean' is not assignable to type 'string | number'.
// const stringNumberArray2: StringNumberArray = [true];

// `Type` here is a placeholder for any given type when using the interface later on. E.g.,
// `const something: GenericInterface<string> = ...;`
interface GenericInterface<Type> {
  set: (obj: Type) => void;
  get: () => Type;
}

class StringClass {
  _value = '';

  set(value: string): void {
    this._value = value;
  }

  get(): string {
    return this._value;
  }
}

const genericInterface1: GenericInterface<string> = new StringClass();
// TSError: Type 'StringClass' is not assignable to type 'GenericInterface<number>'.
// const genericInterface2: GenericInterface<number> = new StringClass();
