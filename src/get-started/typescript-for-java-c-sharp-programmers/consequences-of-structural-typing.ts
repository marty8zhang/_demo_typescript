class Car {
  drive() {
    console.log('Driving a car.');
  }
}

class Boat {
  drive() {
    console.log('Driving a boat.');
  }
}

// No error thrown. OO developers: Okay, probably some kind of auto type conversion happened?
const carBoat: Car = new Boat();

// OO developers go nuts.
carBoat.drive(); // Driving a boat.

/*
 * Explanation: The created object is a `Boat` and it remains unchanged despite and the given type
 * on the left-hand side of the assignment. Meanwhile, the object is also deemed as being
 * compatible to the `Car` type. Hence, there is no error thrown.
 */
