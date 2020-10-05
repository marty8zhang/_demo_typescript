interface ClockInterface {
  tick(): void;
}

// Note the rather unique syntax of interfacing a constructor.
// In some programing languages, e.g., PHP, interfacing constructors isn't needed/achievable.
interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface;
}

/*
 * When working with classes and interfaces, a class has two types: the type of the static side
 * and the type of the instance side.
 * When a class implements an interface, only the instance side of the class is checked. Since
 * the constructor sits in the static side, it is not included in this check.
 *
 * TSError: Class 'Clock' incorrectly implements interface 'ClockConstructor'.
 * Type 'Clock' provides no match for the signature 'new (hour: number, minute: number): any'.
 */
// class Clock implements ClockConstructor {
//   currentTime: Date;
//
//   constructor(h: number, m: number) {
//     // ...
//   }
// }

// Solution 1:
// Part 1: Enforce the type of the instance side.
class DigitalClock implements ClockInterface {
  constructor(h: number, m: number) {
    console.log('Digital Clock created.');
  }

  tick() {
    console.log('beep');
  }
}

// Part 2: Enforce the type of the static side by using a factory function.
function createClock(
  ClockClass: ClockConstructor,
  hour: number,
  minute: number,
): ClockInterface {
  return new ClockClass(hour, minute);
}

// The static constructor function is passed into the factory as an ordinary function and hence
// the `ClockConstructor` interface is enforced.
console.log(typeof DigitalClock); // function.
const digitalClock = createClock(DigitalClock, 12, 17); // Digital Clock created.

// Solution 2: A simpler one without the need of a factory function.
const AnalogClock: ClockConstructor = class AnalogClock implements ClockInterface {
  constructor(h: number, m: number) {
    console.log('Analog Clock created.');
  }

  tick() {
    console.log('tick');
  }
};

const analogClock = new AnalogClock(13, 17); // Analog Clock created.
// Underlyingly, it's still the same JavaScript class mechanism.
console.log(analogClock instanceof AnalogClock); // true.
console.log(Object.getPrototypeOf(analogClock) === AnalogClock.prototype); // true.
