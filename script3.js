//OOP
//Constructor Function

function Rect(height, width) {
  this.height = height;
  this.width = width;
  this.calcArea = function () {
    return this.height * this.width;
  };
}

const rect1 = new Rect(2, 3);
const rect2 = new Rect(5, 8);
const rect3 = new Rect(8, 9);

console.log(rect1.calcArea());
