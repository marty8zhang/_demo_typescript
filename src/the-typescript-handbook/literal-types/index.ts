/*
 * A "literal" is a more concrete sub-type of a collective type. By using literal types you can
 * allow specific values which a string, number, or boolean must have.
 */

/*
 * String Literal Types.
 */
let greetingWord: 'hello' | 'hi' | 'howdy';
greetingWord = 'hi';
greetingWord = 'hello';
/*
 * TSError: Type '"invalid"' is not assignable to type '"hello" | "hi" | "howdy"'.
 */
// greetingWord = 'invalid';

/*
 * Numeric Literal Types.
 * Note the type assertion at the end of the `return` statement is necessary, otherwise you'll get:
 * TSError: Type 'number' is not assignable to type '1 | 2 | 3 | 4 | 5 | 6'.
 */
function rollDice(): 1 | 2 | 3 | 4 | 5 | 6 {
  return (Math.floor(Math.random() * 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6;
}

/*
 * Boolean Literal Types.
 */
interface ValidationSuccess {
  isValid: true;
  reason: null;
}
interface ValidationFailure {
  isValid: false;
  reason: string;
}
let validationResult: ValidationSuccess | ValidationFailure;
