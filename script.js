// Functional programming

//Pure
function createRect(height, width) {
  return {
    height: height,
    width: width,
  };
}

function calcArea(rect) {
  return rect.height * rect.width;
}

groupRect = [createRect(2, 3), createRect(3, 5), createRect(4, 7)];

rectAreaGroup = [];

groupRect.forEach((rect) => {
  rectAreaGroup.push(calcArea(rect));
});

oddAreaGroup = rectAreaGroup.filter((area) => area % 2 === 1);

//console.log(oddAreaGroup);

//Impure function

function randNumber(rect) {
  return rect.height * rect.width * Math.random();
}

const randNumberArray = [
  randNumber(createRect(2, 3)),
  randNumber(createRect(2, 3)),
  randNumber(createRect(2, 3)),
];

console.log(randNumberArray);
