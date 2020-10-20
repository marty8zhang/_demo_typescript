/*
 * `const enum`s can only use constant enum expressions and unlike regular `enum`s they are
 * completely removed during compilation. Their members are inlined at use sites.
 * In other words, `const` here doesn't mean that the values of its members cannot be changed;
 * rather, it means its member values are constants, which should be determinable during
 * transpile time.
 * Note: `enum` members are readonly and hence their values cannot be changed anyway.
 */
const enum ConstEnums {
  A = 1,
  B = 2 + 3,
}
const constEnums = [ConstEnums.A, ConstEnums.B];
enum Enums {
  A = 1,
  B = 2 + 3,
}
const enums = [Enums.A, Enums.B];
/*
 * Transpiled JavaScript:
 */
// var constEnums = [1 /* A */, 5 /* B */];
// var enums = [Enums.A, Enums.B];
