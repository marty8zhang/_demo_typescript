class TestClass {
  print(): void {
    console.log('Hello, world!');
  }
}

/*
 * When an interface type extends a class type it inherits the members of the class but not
 * their implementations.
 */
interface printableInterface extends TestClass {
  id: number;
}

const printableOne: printableInterface = {
  id: 1,

  print() {
    console.log('Hi! I have to define my own `print()`.');
  },
};
/*
 * TSError: Property 'print' is missing in type '{ id: number; }' but required in type
 * 'printableInterface'.
 */
// const printableTwo: printableInterface = {
//   id: 2,
// };
/*
 * @see https://stackoverflow.com/questions/12761607/typescript-void-return-type-converted-to-any-type
 */
const printableThree: printableInterface = {
  id: 3,

  print(): string {
    return 'I have a different return type. This is usually illegal too, but I get away from it '
      + 'because the return type of the interfaced method is `void`.';
  },
};
console.log(printableThree.print());
/*
 * TSError: Type '(message: string) => void' is not assignable to type '() => void'.
 */
// const printableFour: printableInterface = {
//   id: 4,
//
//   print(message: string) {
//     console.log(`I change the parameter list with ${message}.`);
//   },
// };

class Control {
  private state: any;

  constructor() {
    this.state = 'initialised';
  }

  get currentState(): string {
    return this.state;
  }
}

interface SelectableControl extends Control {
  select(): void;
}

class Button extends Control implements SelectableControl {
  select(): void {
    // ...
  }
}

class TextBox extends Control {
  select(): void {
    // ...
  }

  /*
   * TSError: Property 'state' is private and only accessible within class 'Control'.
   */
  // get currentState(): string {
  //   return this.state;
  // }
}

// Because TypeScript’s type system is structural, an object of `TextBox` can also be seemed
// as implemented `SelectableControl`.
const textBox: SelectableControl = new TextBox();
/*
 * TSError: Property 'state' is private and only accessible within class 'Control'.
 */
// console.log(textBox.state);
console.log(textBox.currentState); // initialised.

/*
 * Interfaces inherit even the private and protected members of a base class. This means that
 * when you create an interface that extends a class with private or protected members, that
 * interface type can only be implemented by that class or a subclass of it.
 *
 * TSError: Class 'ImageControl' incorrectly implements interface 'SelectableControl'.
 * Types have separate declarations of a private property 'state'.
 */
// class ImageControl implements SelectableControl {
//   private state: any;
//
//   select() {
//     // ...
//   }
// }
