enum LogLevel {
  INFO = 1,
  DEBUG = 2,
  WARN = INFO + DEBUG,
  ERROR = DEBUG + WARN,
}

/*
 * `enum`s are real objects that exist at runtime.
 */
function test(object: { INFO: number }) {
  console.log(object.INFO);
}
test(LogLevel); // 1.

type TestType = {
  INFO: 1;
  DEBUG: 2;
  // ...
};
type TestTypeKeys = keyof TestType; // Same as `type TestTypeKeys = 'INFO' | 'DEBUG';`.
let testTypeKey: TestTypeKeys = 'INFO';
testTypeKey = 'DEBUG';
/*
 * TSError: Type '"invalid"' is not assignable to type '"INFO" | "DEBUG"'.
 */
// testTypeKey = 'invalid';
/*
 * `enum`s at TypeScript transpile time works slightly different than ordinary types.
 * Note the additional `typeof` required below.
 */
type LogLevelKeys1 = keyof LogLevel;
/*
 * TSError: Type '"INFO"' is not assignable to type '"toString" | "toFixed" | "toExponential"
 * | "toPrecision" | "valueOf" | "toLocaleString"'.
 */
// let logLevelKey1: LogLevelKeys1 = 'INFO';
type LogLevelKeys2 = keyof typeof LogLevel; // type LogLevelKeys = 'INFO' | 'DEBUG' | ...;
let logLevelKey2: LogLevelKeys2 = 'INFO';

/*
 * The transpiled JavaScript code of the above `enum`.
var LogLevel;
(function (LogLevel) {
  LogLevel[LogLevel.INFO = 1] = 'INFO';
  LogLevel[LogLevel.DEBUG = 2] = 'DEBUG';
  LogLevel[LogLevel.WARN = 3] = 'WARN';
  LogLevel[LogLevel.ERROR = 5] = 'ERROR';
}(LogLevel || (LogLevel = {})));
 */
