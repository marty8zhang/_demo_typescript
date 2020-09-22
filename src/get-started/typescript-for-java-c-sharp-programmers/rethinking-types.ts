interface Pointlike {
  x: number;
  y: number;
}

interface Named {
  name: string;
}

function printPoint(point: Pointlike) {
  console.log(`x = ${point.x}, y = ${point.y}`);
}

function printName(x: Named) {
  console.log(`Hello, ${x.name}`);
}

/*
 * The fields can be assigned with `undefined` or `null`, or be deleted and the object can still be
 * deemed as satisfying the interfaces.
 * Missing out of the fields or mis-typed them with non-`undefined` and non-`null` values on the
 * other hand aren't acceptable.
 */
const obj = {
  x: 1,
  y: 2,
  name: 'Origin',
};
printPoint(obj); // x = 1, y = 2.
printName(obj); // Hello, Origin.

obj.x = null;
obj.y = undefined;
delete obj.name;
printPoint(obj); // x = null, y = undefined.
printName(obj); // Hello, undefined.
