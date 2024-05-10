//OOP
//Classes

class Rect {
  constructor(height, width) {
    console.log("Enter the constructor");
    this.height = height;
    this.width = width;
  }

  calcArea(height, width) {
    console.log("Calculating");
    return height * width;
  }

  static info() {
    return "Rectangle is a quadrilateral in which all 4 angles are right angles; opposite sides parallel and equal.";
  }
}

const rect1 = new Rect(2, 3);

// console.log(rect1.calcArea(5, 5));
// console.log(Rect.calcArea(5, 5));

class Operation {
  static sumOfTwoNumbers(a, b) {
    return a + b;
  }

  static multipleThreeNumbers(a, b, c) {
    return a * b * c;
  }
}

console.log(Operation.sumOfTwoNumbers(2, 3));
console.log(Operation.multipleThreeNumbers(2, 3, 4));
