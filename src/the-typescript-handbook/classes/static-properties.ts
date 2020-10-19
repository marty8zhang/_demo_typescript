class StaticTestClass {
  static greetings = 'Hello!';

  private static baseNumber = 123;

  private readonly _result: number;

  constructor(number: number) {
    this._result = StaticTestClass.baseNumber + number;
  }

  get result(): number {
    return this._result;
  }
}

console.log(StaticTestClass.greetings); // Hello!
/*
 * TSError: Property 'baseNumber' is private and only accessible within class 'StaticTestClass'.
 */
// console.log(StaticTestClass.baseNumber);

const staticTestClass = new StaticTestClass(456);
console.log(staticTestClass.result); // 579.
