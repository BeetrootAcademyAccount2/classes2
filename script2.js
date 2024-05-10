//OOP

// const rect = {
//   height: 4,
//   width: 5,
//   calcArea: function () {
//     return this.height * this.width;
//   },
// };

//Factory function

function createRect(height, width) {
  return {
    height: height,
    width: width,
    calcArea: function () {
      return this.height * this.width;
    },
  };
}

function createShape(height, side, shape) {
  if (shape === "rect") {
    return {
      height: height,
      width: side,
      calcArea: function () {
        return this.height * this.width;
      },
    };
  } else if (shape === "triangle") {
    return {
      height: height,
      side: side,
      calcArea: function () {
        return (this.height * this.side) / 2;
      },
    };
  } else {
    //square
    return {
      side: side,
      calcArea: function () {
        return this.side * this.side;
      },
    };
  }
}

const rect1 = createRect(2, 3);
const rect2 = createRect(2, 3);
const rect3 = createRect(2, 3);
const rect4 = createRect(2, 3);

console.log(rect1.calcArea());
console.log(rect2.height);
console.log(rect3.width);
