//OOP
//Classes

class Rect {
  constructor(height, width) {
    console.log("Enter the constructor");
    this._height = height;
    this._width = width;
    this._color = "red";
  }

  get height() {
    return this._height;
  }

  calcArea() {
    console.log("Calculating");
    return this._height * this._width;
  }

  static info() {
    return "Rectangle is a quadrilateral in which all 4 angles are right angles; opposite sides parallel and equal.";
  }
}

const rect1 = new Rect(2, 3);

console.log(rect1.calcArea(5, 5));
// console.log(Rect.calcArea(5, 5));

class Operation {
  static pi = 3.14;

  static sumOfTwoNumbers(a, b) {
    return a + b;
  }

  static multipleThreeNumbers(a, b, c) {
    return a * b * c;
  }
}

// console.log(Operation.sumOfTwoNumbers(2, 3));
// console.log(Operation.multipleThreeNumbers(2, 3, 4));
