interface TestInterface<T, U> {
  fieldOne: T;

  functionOne(parameter: U): U;
}
const testObject: TestInterface<string, number> = {
  fieldOne: 'test',

  // This function has effectively been enforced as `functionOne(parameter: number): number {}`.
  functionOne(parameter) {
    return parameter;
  },
};
/*
 * TSError: Argument of type 'string' is not assignable to parameter of type 'number'.
 */
// testObject.functionOne('test');

class GenericTypedClass<T> {
  /*
   * A class has two sides to its type: the static side and the instance side. Generic classes
   * are only generic over their instance side rather than their static side, so when working
   * with classes, static members can not use the class’s type parameter.
   * TSError: Static members cannot reference class type parameters.
   */
  // public static staticProperty: T;

  public instanceProperty: T;

  constructor(instanceProperty: T) {
    this.instanceProperty = instanceProperty;
  }
}
