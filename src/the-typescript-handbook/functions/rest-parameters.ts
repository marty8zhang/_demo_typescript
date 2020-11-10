function sum(
  numberOne: number,
  numberTwo: number,
  ...restNumbers: number[]
): number {
  return restNumbers.reduce(
    (result: number, currentNumber: number): number => result + currentNumber,
    numberOne + numberTwo,
  );
}

console.log(sum(1, 2)); // 3.
console.log(sum(3, 4, 5, 6)); // 18.

const mySum: (a: number, b: number, ...rest: number[]) => number = sum;
