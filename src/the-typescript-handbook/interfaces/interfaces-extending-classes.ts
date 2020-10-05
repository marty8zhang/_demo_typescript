class Control {
  private state: any;

  constructor() {
    this.state = 'initialised';
  }

  get currentState(): string {
    return this.state;
  }
}

/*
 * When an interface type extends a class type it inherits the members of the class but not
 * their implementations.
 */
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
