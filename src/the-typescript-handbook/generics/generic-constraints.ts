/*
 * TSError: Property 'length' does not exist on type 'T'.
 */
// function printLogs<T>(logs: T): void {
//   if (typeof logs === 'string') {
//     console.log(logs);
//   } else {
//     console.log(`There was/were ${logs.length} log(s).`);
//   }
// }
interface LengthAwareInterface {
  length: number;
}
/*
 * Set constraints on the generic type so that it can no longer be any type.
 */
function printLogs<T extends LengthAwareInterface>(logs: T): void {
  if (typeof logs === 'string') {
    console.log(logs);
  } else {
    console.log(`There was/were ${logs.length} log(s).`);
  }

  // ...
}
printLogs(['Test Message 1.', 'Test Message 2.']); // There was/were 2 log(s).
printLogs('Test Message 3.'); // Test Message 3.
/*
 * TSError: Argument of type 'boolean' is not assignable to parameter of type
 * 'LengthAwareInterface'.
 */
// printLogs(true);

/*
 * Use type parameters in generic constraints.
 * You can declare a type parameter that is constrained by another type parameter. Below
 * `K extends keyof T` ensures that we won't accidentally access a property that doesn't exist
 * in `T`.
 */
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}
const x = {
  existingKeyOne: 1,
  existingKeyTwo: 2,
};
console.log(getProperty(x, 'existingKeyOne')); // 1.
/*
 * TSError: Argument of type '"nonExistingKey"' is not assignable to parameter of type
 * '"existingKeyOne" | "existingKeyTwo"'.
 */
// console.log(getProperty(x, 'nonExistingKey'));

/*
 * Use class types in generic constraints.
 * When creating factories in TypeScript using generics, it is necessary to refer to class types
 * by their constructor functions.
 */
class Animal {
  numberOfLegs = 4;
}
class Bee extends Animal {
  constructor() {
    super();

    this.numberOfLegs = 6;
  }
}
class Lion extends Animal {}
/*
 * The `new () => A` syntax basically indicates that a class constructor will be passed in.
 * Another form:
 * function createAnimal<A extends Animal>(ClassName: { new (): A }): A {
 */
function createAnimal<A extends Animal>(ClassName: new () => A): A {
  return new ClassName();
}
console.log(createAnimal(Lion).numberOfLegs); // 4.
console.log(createAnimal(Bee).numberOfLegs); // 6.
