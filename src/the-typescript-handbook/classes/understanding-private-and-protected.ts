class PrivateFieldCompatibilityTestClassOne {
  private privateField = '1';
}
class PrivateFieldCompatibilityTestClassTwo {
  private privateField = '2';
}
class ProtectedFieldCompatibilityTestClassOne {
  protected protectedField = 3;
}
class ProtectedFieldCompatibilityTestClassTwo {
  protected protectedField = 4;
}
let privateFieldCompatibilityTestClassOne = new PrivateFieldCompatibilityTestClassOne();
let privateFieldCompatibilityTestClassTwo = new PrivateFieldCompatibilityTestClassTwo();
let protectedFieldCompatibilityTestClassOne = new ProtectedFieldCompatibilityTestClassOne();
let protectedFieldCompatibilityTestClassTwo = new ProtectedFieldCompatibilityTestClassTwo();
/*
 * When TypeScript comparing types that have `private`/`protected` members, for two types to be
 * considered compatible, both types must to have the same `private`/`protected` members
 * which were originated from the same declarations.
 *
 * TSError: Type 'PrivateFieldCompatibilityTestClassTwo' is not assignable to type
 * 'PrivateFieldCompatibilityTestClassOne'.
 * Types have separate declarations of a private property 'privateField'.
 */
// privateFieldCompatibilityTestClassOne = privateFieldCompatibilityTestClassTwo;
/*
 * TSError: Type 'ProtectedFieldCompatibilityTestClassTwo' is not assignable to type
 * 'ProtectedFieldCompatibilityTestClassOne'.
 * Property 'protectedField' is protected but type 'ProtectedFieldCompatibilityTestClassTwo'
 * is not a class derived from 'ProtectedFieldCompatibilityTestClassOne'.
 */
// protectedFieldCompatibilityTestClassOne = protectedFieldCompatibilityTestClassTwo;

class Person {
  protected name: string;

  /*
   * TypeScript class constructors can also be marked as `protected`. This results in that their
   * containing classes cannot be instantiated by themselves, but can only be extended.
   */
  protected constructor(theName: string) {
    this.name = theName;
  }
}
class Employee extends Person {
  private department: string;

  constructor(name: string, department: string) {
    super(name);
    this.department = department;
  }
}
/*
 * TSError: Constructor of class 'Person' is protected and only accessible within the class
 * declaration.
 */
// const person = new Person('John');
const employee = new Employee('Smith', 'IT');
