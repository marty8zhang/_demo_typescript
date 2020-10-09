interface FruitBag {
  pickedFruit: string,
}

interface RandomFruitVendor {
  fruits: string[],

  getRandomFruitPacker(): () => FruitBag,
}

const randomFruitVendor: RandomFruitVendor = {
  fruits: ['Apple', 'Banana', 'Orange', 'Pear'],

  getRandomFruitPacker(): () => FruitBag {
    /*
     * Run `npx tsc --noImplicitThis` against this file will trigger an error with:
     * "'this' implicitly has type 'any' because it does not have a type annotation."
     *
     * Note: The below inner `return` won't work as expected anyway, because the scope of
     * `this` when the line is executed won't be `randomFruitVendorOne`, and hence `this.fruits`
     * will be `undefined`.
     */
    // return function () {
    //   return { pickedFruit: this.fruits[Math.floor(Math.random() * 4)] };
    // };

    /*
     * Solution 1: Explicitly declare the type for `this`. `this` parameters are fake parameters
     * that come first in the parameter list of a function.
     * Note: This solution is for demonstration purposes only. It still contains the same bug
     * as the above version.
     */
    // return function (this: RandomFruitVendor) {
    //   return { pickedFruit: this.fruits[Math.floor(Math.random() * 4)] };
    // };

    /*
     * Solution 2: Use an arrow function.
     */
    return () => ({ pickedFruit: this.fruits[Math.floor(Math.random() * 4)] });
  },
};
console.log(randomFruitVendor.getRandomFruitPacker()()); // { pickedFruit: '?' }

const testThisParameter = {
  id: 1,
  /*
   * The fake `this: void` parameter makes sure you cannot access the properties of the current
   * object inside the method.
   */
  testUnusableThis(this: void, message: string): void {
    /*
     * TSError: Property 'id' does not exist on type 'void'.
     */
    // console.log(`${this.id}: ${message}`);
    /*
     * However, the fake parameter doesn't prevent you from printing out the whole object or even
     * returning it.
     */
    console.log(this);

    return this;
  },
  testUsableThis(this: any, message: string): void {
    console.log(`${this.id}: ${message}`);
  },
};
// { id: 1, testUnusableThis: ... }.
testThisParameter.testUnusableThis('Will this work?');
// { id: 1, testUnusableThis: ... } x 2.
console.log(testThisParameter.testUnusableThis('Will this work?'));
// 1: This works.
testThisParameter.testUsableThis('This works.');

class UnusableThisClass {
  handlers = [];

  message = 'Start handling...';

  id = 999;

  addHandler(handler: (this: void, message: string) => void): void {
    this.handlers.push(handler);
  }

  run(): void {
    this.handlers.map((handler) => handler(this.message));
    this.handlers = [];
  }
}
const unusableThisClass = new UnusableThisClass();
/*
 * Object methods passed around like this and called outside of the original object's context
 * will lose its concept of `this`.
 * `run()` Output: undefined: Start handling...
 */
unusableThisClass.addHandler(testThisParameter.testUsableThis);
/*
 * Hence, we'll need to (re-)bind `this` to its original scope.
 * `run()` Output: 1: Start handling...
 */
unusableThisClass.addHandler(testThisParameter.testUsableThis.bind(testThisParameter));
unusableThisClass.run();

class Handler {
  id = 2;

  handleUsableThisWithWrongType(this: Handler, message: string): void {
    console.log(`${this.id}: ${message}`);
  }

  handleUsableThisWithArrowFunction = (message: string) => console.log(`${this.id}: ${message}`);
}
const handler = new Handler();
/*
 * TSError: Argument of type '(this: Handler, message: string) => void' is not assignable
 * to parameter of type '(this: void, message: string) => void'.
 */
// unusableThisClass.addHandler(handler.handleUsableThisWithWrongType);
/*
 * `this` in arrow functions has a much more "solid" connection to its original scope. Hence,
 * we can freely pass the arrow function around.
 * `run()` Output: 2: Start handling...
 */
unusableThisClass.addHandler(handler.handleUsableThisWithArrowFunction);
unusableThisClass.run();
