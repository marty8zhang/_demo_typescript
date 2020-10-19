/*
 * `readonly` properties must be initialized at their declaration or in the constructor.
 */
class ReadonlyTestClass {
  readonly _readonlyFieldOne: string;

  readonly _readonlyFieldTwo: number = 1;

  constructor(readonlyFieldOneValue = 'test') {
    this._readonlyFieldOne = readonlyFieldOneValue;
  }

  /*
   * TSError: Cannot assign to '_readonlyFieldOne' because it is a read-only property.
   */
  // set readonlyFieldOne(value: string) {
  //   this._readonlyFieldOne = value;
  // }
}
const readonlyTestObjectOne = new ReadonlyTestClass();
const readonlyTestObjectTwo = new ReadonlyTestClass('hello');
console.debug(readonlyTestObjectOne._readonlyFieldOne);
console.debug(readonlyTestObjectTwo._readonlyFieldOne);
/*
 * TSError: Cannot assign to '_readonlyFieldTwo' because it is a read-only property.
 */
// readonlyTestObjectTwo._readonlyFieldTwo = 'hi';
