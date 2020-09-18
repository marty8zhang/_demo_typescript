class Car {
  drive() {
    console.log('Driving a car.');
  }
}

class Boat {
  engine = 'test-engine';

  drive() {
    console.log('Driving a boat.');
  }
}

interface GenericBoat {
  drive();
}

// No error thrown. OO developers: Okay, probably some kind of auto type conversion happened?
const carBoat: Car = new Boat();

// OO developers go nuts.
carBoat.drive(); // Driving a boat.

/*
 * Explanation: The created object is a `Boat` and it remains unchanged despite the given type
 * on the left-hand side of the assignment. Meanwhile, the object is also deemed as being
 * compatible to the `Car` class. Hence, there is no error thrown.
 */
console.log(carBoat instanceof Car); // false.
console.log(carBoat instanceof Boat); // true.

// However, there will be some "conversion" happening when assigning a class object to a
// typed/interfaced variable.
const boatOne: GenericBoat = new Boat();
// Output: TSError: Property 'engine' does not exist on type 'GenericBoat'.
// console.log(boatOne.engine);

const boatTwo = new Boat();
console.log(boatTwo.engine); // test-engine.
