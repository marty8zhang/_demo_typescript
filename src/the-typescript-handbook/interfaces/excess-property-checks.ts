interface ExcessPropertyChecksInterface {
  optionalFieldOne?: number;
  optionalFieldTwo?: string;
}

/*
 * Excess property checking happens when assigning object literals to interfaced
 * variables/parameters.
 * TSError: Type '{ optionalFieldOne: number; otherField: number; }' is not assignable to type
 * 'ExcessPropertyChecksInterface'.
 * Object literal may only specify known properties, and 'otherField' does not exist in type
 * 'ExcessPropertyChecksInterface'.
 */
// const excessPropertyChecksOne: ExcessPropertyChecksInterface = {
//   optionalFieldOne: 1,
//   otherField: 1.1,
// };

// Pass excess property checks by pre-initialising an object, then assign that object to
// an interfaced variables/parameters.
const testObjectOne = {
  optionalFieldOne: 1,
  otherField: 1.1,
};
const excessPropertyChecksTwo: ExcessPropertyChecksInterface = testObjectOne;
/*
 * However, the assigning object must have at least one common property with the assigned
 * interfaced variable/parameter; otherwise, an error will still be thrown.
 * TSError: Type '{ otherField: number; }' has no properties in common with type
 * 'ExcessPropertyChecksInterface'.
 */
const testObjectTwo = {
  otherField: 1.1,
};
// const excessPropertyChecksThree: ExcessPropertyChecksInterface = testObjectTwo;

// Pass excess property checks with type assertions.
const excessPropertyChecksFour: ExcessPropertyChecksInterface = {
  optionalFieldOne: 1,
  otherField: 1.1,
} as ExcessPropertyChecksInterface;

// Index signatures.
interface IndexSignatureInterface {
  optionalFieldOne?: number;
  optionalFieldTwo?: string;
  [propName: string]: any;
}
// No error thrown.
const indexSignatureOne = {
  otherField: 1.1,
};
