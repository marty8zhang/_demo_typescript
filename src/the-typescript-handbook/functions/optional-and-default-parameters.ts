function generateFullNameOne(firstName = 'John', lastName?: string): string {
  if (lastName) return `${firstName} ${lastName}`;
  return firstName;
}

/*
 * Note the default value will only be provided if a value hasn't been passed in at all or
 * `undefined` has been passed in.
 */
console.log(generateFullNameOne(undefined)); // John.
/*
 * TSError: Argument of type 'null' is not assignable to parameter of type 'string | undefined'.
 * Note: In non-strict mode, no error will be thrown for assigning `null` to any type.
 */
// console.log(generateFullNameOne(null)); // null.
/*
 * Note TypeScript will automatically determine and enforce the type for you if a default value
 * has been provided for a parameter/variable. E.g., for `generateFullNameOne()`, the first
 * parameter wasn't explicitly declared as `string`, yet TypeScript enforces you to pass in a
 * `string`
 * TSError: Argument of type 'boolean' is not assignable to parameter of type 'string | undefined'.
 */
// console.log(generateFullNameOne(true));

/*
 * TSError: A required parameter cannot follow an optional parameter.
 */
// function generateFullNameTwo(firstName?: string, lastName: string): string {
//   if (firstName) return `${firstName} ${lastName}`;
//   return lastName;
// }

/*
 * It's not necessary to declare required parameters before optional parameters which have
 * default values.
 */
function generateFullNameThree(firstName = 'John', lastName: string): string {
  if (firstName) return `${firstName} ${lastName}`;
  return lastName;
}

/*
 * TSError: Parameter cannot have question mark and initializer.
 */
// function printFullName(fullName? = 'John Smith') {
//   console.log(fullName);
// }
