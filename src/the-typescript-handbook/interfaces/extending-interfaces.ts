interface Shape {
  color: string;
}

interface PenStroke {
  penWidth: number;
}

interface Square extends Shape, PenStroke {
  sideLength: number;
}

// Note how a type assertion can almost bypass any type check.
const square = {} as Square;
square.color = 'blue';
square.sideLength = 10;
square.penWidth = 5.0;
console.log(square); // { color: 'blue', sideLength: 10, penWidth: 5 }.
