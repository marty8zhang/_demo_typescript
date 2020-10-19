class Animal {
  /*
   * Class properties/methods in TypeScript are `public` by default.
   */
  name: string;

  constructor(theName: string) {
    this.name = theName;
  }

  move(distanceInMeters = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

class Snake extends Animal {
  constructor(theName: string) {
    /*
     * Note this is also an error in JavaScript. E.g.,
     * TypeError: Cannot set property 'name' of undefined.
     *
     * TSError: 'super' must be called before accessing 'this' in the constructor of a derived
     * class.
     */
    // console(this.name);

    super(theName);

    this.name = `${this.name} the Snake`;
  }

  move(distanceInMeters = 5) {
    console.log('Slithering...');
    super.move(distanceInMeters);
  }
}

const sam: Animal = new Snake('Sammy');
/*
 * Output:
Slithering...
Sammy the Snake moved 5m.
 */
sam.move();

abstract class AbstractClass {
  protected abstract abstractMethod(value: number): string;

  printGreetings(): void {
    console.log('Hello!');
  }
}

class ConcreteClass extends AbstractClass {
  /*
   * Note: OOP 101 - You can increase the visibility of a parent/abstract method in
   * child/concrete classes, but not the other way around.
   */
  public abstractMethod(value: number): string {
    return value.toString();
  }
}

const concreteClass = new ConcreteClass();
concreteClass.printGreetings(); // Hello!
console.debug(concreteClass.abstractMethod(123)); // 123.
