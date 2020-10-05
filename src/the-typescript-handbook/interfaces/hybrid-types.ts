// An instance of `Counter` is both a function and an object.
// Note: This is the nature of JavaScript, not an extension by TypeScript.
interface Counter {
  (start: number): string;

  interval: number;

  reset(): void;
}

function getCounter(): Counter {
  const counter = function (start: number): string {
    return `Counter starts with ${start}.`;
  };

  counter.interval = 123;

  counter.reset = function () {
    console.log('Counter reset.');
  };

  return counter;
}

const c = getCounter();
console.log(c(10)); // Counter starts with 10.
c.reset(); // Counter reset.
c.interval = 5.0;
console.log(c); // [Function: counter] { interval: 5, reset: [Function] }.
