class Person {
  constructor(name, breed) {
    this.name = name;
  }
}

class Animal {
  #feedingCounter = 0; // Private field

  #increment() {
    //Private Method
    this.#feedingCounter++;
  }

  constructor(name, breed) {
    if (typeof name === "string" && name.length > 2) {
      this._name = name;
    } else {
      this._name = "Jon Doe";
    }
    this.breed = breed;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value === "string" && value.length > 2) {
      this._name = value;
    } else {
      this._name = "Jon Doe";
    }
  }

  introduce() {
    console.log(`My name is ${this.name} and I am a ${this._breed}`);
  }

  feed() {
    this.#increment();
  }

  getTimesFed() {
    return this.#feedingCounter;
  }
}

class Snake extends Animal {
  constructor(name, breed, isPoisonous) {
    super(name, breed);
    this.isPoisonous = isPoisonous;
  }

  introduce() {
    if (arguments.length === 0) {
      console.log("Hsssss");
    } else if (arguments.length === 1) {
      console.log("Hssssssss");
    } else {
      console.log("Hsssssssssssssss");
    }
  }
}

const cobra = new Snake("A", "cobra", true);

const dog = new Animal("Alexander", "dog");

const person = new Person("John");

function introOfAnimal(entity) {
  console.log(`I am ${entity.name} and my breed is ${entity.breed}`);
}

introOfAnimal(dog);
introOfAnimal(person);
