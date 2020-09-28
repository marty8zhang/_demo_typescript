interface readonlyPropertiesInterface {
  readonly readonlyProperty: number;
}

const readonlyPropertiesObjectOne: readonlyPropertiesInterface = {
  readonlyProperty: 111,
};
// TSError: Cannot assign to 'readonlyProperty' because it is a read-only property.
// readonlyPropertiesObjectOne.readonlyProperty = 222;

// Note `readonly` cannot guarantee a field is readonly if an object is initialised somewhere else
// and was later assigned to the `readonly` interfaced variable.
const testObject = {
  readonlyProperty: 333,
};
const readonlyPropertiesObjectTwo: readonlyPropertiesInterface = testObject;
// TSError: Cannot assign to 'readonlyProperty' because it is a read-only property.
// readonlyPropertiesObjectTwo.readonlyProperty = 555;
testObject.readonlyProperty = 444;
console.log(readonlyPropertiesObjectTwo.readonlyProperty); // 444.
console.log(testObject === readonlyPropertiesObjectTwo); // true.

// TypeScript comes with a `ReadonlyArray<T>` type that is the same as `Array<T>` with all
// mutating methods removed.
let anArray: number[] = [1, 2, 3];
const aReadonlyArray: ReadonlyArray<number> = anArray;
// TSError: Index signature in type 'readonly number[]' only permits reading.
// aReadonlyArray[0] = 0;
// TSError: Property 'push' does not exist on type 'readonly number[]'.
// aReadonlyArray.push(4);
anArray.length = 4;
console.log(anArray); // [ 1, 2, 3, <1 empty item> ].
// TSError: Cannot assign to 'length' because it is a read-only property.
// aReadonlyArray.length = 4;

// You cannot assign a readonly array to a mutable array, but you can "convert" a readonly array
// to a mutable one.
// TSError: The type 'readonly number[]' is 'readonly' and cannot be assigned to the mutable type
// 'number[]'.
// anArray = aReadonlyArray;
anArray = aReadonlyArray as number[];
