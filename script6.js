function Animal(name, breed) {
  let _counter = 0;

  this.increment = function () {
    _counter++;
  };

  this.name = name;
  this.breed = breed;
}

Animal.prototype.intro = function () {
  console.log("Hello, my name is ", this.name);
};

function Snake(name, breed, isPoisonous) {
  Animal.call(this, name, breed);
  this.isPoisonous = isPoisonous;
}

Snake.prototype = Object.create(Animal.prototype);
Snake.prototype.constructor = Snake;

Snake.prototype.intro = function () {
  console.log("Hsssssss");
};

const animal = new Animal("John", "cat");

const cobra = new Snake("Adam", "cobra", true);

cobra.intro();
