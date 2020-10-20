/*
 * When all members in an `enum` have literal enum values, which are either not initialised or
 * are initialised with numeric or string literals, those members also become types as well.
 */
enum NumericLiteralsEnum {
  one = 1,
  two,
}
interface One {
  type: NumericLiteralsEnum.one; // `NumericLiteralsEnum.one` is a type now.
}
interface Two {
  type: NumericLiteralsEnum.two;
}
/*
 * TSError: Type 'NumericLiteralsEnum.two' is not assignable to type 'NumericLiteralsEnum.one'.
 */
// const c: One = {
//   type: NumericLiteralsEnum.two,
// };
/*
 * However, TypeScript won't enforce the type check when directly assigning a numeric value to
 * the typed property. Hence, the below line won't cause any compilation error but it's in fact
 * a logic error.
 */
const s: Two = {
  type: 123,
};

/*
 * String literal `enum`s on the other hand are more strict with the type check and hence can
 * prevent the above logic error.
 */
enum StringLiteralsEnum {
  A = 'A',
  B = 'B',
}
interface A {
  type: StringLiteralsEnum.A,
}
interface B {
  type: StringLiteralsEnum.B,
}
/*
 * TSError: Type 'StringLiteralsEnum.B' is not assignable to type 'StringLiteralsEnum.A'.
 */
// const a1: A = {
//   type: StringLiteralsEnum.B,
// };
/*
 * TSError: Type '"A"' is not assignable to type 'StringLiteralsEnum.A'.
 */
// const a2: A = {
//   type: 'A',
// };

/*
 * When all members are numeric/string literals, the `enum` also becomes a union of each enum
 * member.
 * Note: However, using numeric literal `enum`s might still run into the logic error mentioned
 * above.
 */
interface LiteralEnumUnion {
  type: StringLiteralsEnum; // Use an `enum` as a union of types.
}
const literalEnumUnionA: LiteralEnumUnion = {
  type: StringLiteralsEnum.A,
};
const literalEnumUnionB: LiteralEnumUnion = {
  type: StringLiteralsEnum.B,
};
/*
 * TSError: Type '"A"' is not assignable to type 'StringLiteralsEnum'.
 */
// const literalEnumUnionInvalidA: LiteralEnumUnion = {
//   type: 'A',
// };
