/*
 * Parameter properties let you create and initialize a member in one place - the constructor -.
 * Parameter properties are declared by prefixing a constructor parameter with an accessibility
 * modifier or readonly, or both.
 */
class ParameterPropertiesTestClass {
  constructor(
    public publicField: number,
    protected protectedField: string,
    private privateField: any[],
    readonly readonlyField: {a: number},
    nonParameterProperty: boolean,
  ) {}
}

const parameterPropertiesTestClass = new ParameterPropertiesTestClass(
  123,
  'Just a test.',
  [4, 'Five', {}],
  { a: 1 },
  true,
);
/*
 * Output:
ParameterPropertiesTestClass {
  publicField: 123,
  protectedField: 'Just a test.',
  privateField: [ 4, 'Five', {} ],
  readonlyField: { a: 1 }
}
 */
console.debug(parameterPropertiesTestClass);
/*
 * TSError: Property 'nonParameterProperty' does not exist on type 'ParameterPropertiesTestClass'.
 */
// console.debug(parameterPropertiesTestClass.nonParameterProperty);
