class Car {}

const car: Car = new Car();

// Reflection doesn't work too well (if not at all) on TypeScript types or ES6 classes, because
// type/class information is "erased" during runtime.
console.log(typeof Car); // function.
console.log(typeof car); // object.

// Output: true.
// However, `instanceof` won't be useful unless you know what type/class to check beforehand.
console.log(car instanceof Car);
