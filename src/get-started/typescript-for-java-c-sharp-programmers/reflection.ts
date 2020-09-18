class Car {}

const car: Car = new Car();

// Reflection doesn't work too well (if not at all) on TypeScript types or ES6 classes, because
// type/class information is "erased" during runtime.
console.log(typeof Car); // function.
console.log(typeof car); // object.

// Output: true.
// However, `instanceof` won't be useful unless you know what type/class to check beforehand.
console.log(car instanceof Car);

interface User {
  name: string;
}

const user: User = {
  name: 'Tester',
};

console.log(typeof user); // object.
// `instanceof` doesn't work on types/`interface`s.
// Output: TSError: 'User' only refers to a type, but is being used as a value here.
// console.log(user instanceof User);
