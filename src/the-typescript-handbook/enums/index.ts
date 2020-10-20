/*
 * `enum`s allow developers to define sets of named constants.
 */
enum Direction {
  Up,
  Down,
  Left,
  Right,
}
function move(direction: Direction): void {
  if (Direction[direction]) {
    console.log(`Moved ${Direction[direction].toLowerCase()}.`);
  } else {
    console.debug(`Couldn't move. Invalid direction "${direction}".`);
  }
}
move(Direction.Left); // Moved left.
move(5); // Couldn't move. Invalid direction "5".

function getNumber(): number {
  return 10;
}
/*
 * `enum`s can have computed values. However, the members which aren't initialised should be
 * declared before those whose values are not constant.
 */
enum ComputedValuesEnum {
  A,
  B = 2 + 3,
  C, // No error thrown.
  /*
   * The returned value of `getNumber()` won't be counted as a constant since TypeScript
   * won't know the result without actually executing the code.
   */
  D = getNumber(),
  /*
   * TSError: Enum member must have initializer.
   */
  // E,
  F = B + C, // Note the members in the same set can be directly used.
  G, // Also no error thrown.
}
console.debug(ComputedValuesEnum.F, ComputedValuesEnum.G); // 11 12.

enum StringsEnum {
  a = 'A',
  b = 'B',
  /*
   * Similar to members after a computed non-constant value, members after a string value
   * must be initialised too.
   * TSError: Enum member must have initializer.
   */
  // c,
}

/*
 * TSError: Computed values are not permitted in an enum with string valued members.
 */
// enum ComputedValueAndStringValueEnum {
//   a = 2 * 3,
//   b = 'B',
// }
