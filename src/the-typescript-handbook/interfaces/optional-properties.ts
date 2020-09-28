interface OptionalPropertiesInterface {
  mandatoryField: string;
  optionalField?: number; // A question mark right after the field name indicates it's optional.
}

const optionalPropertiesObjectOne: OptionalPropertiesInterface = {
  mandatoryField: 'Just a test.',
};
const optionalPropertiesObjectTwo: OptionalPropertiesInterface = {
  mandatoryField: 'Yet another test.',
  optionalField: 123,
};
// TSError: Property 'nonExistingField' does not exist on type 'OptionalPropertiesInterface'.
// optionalPropertiesObjectOne.nonExistingField = 1.23;
