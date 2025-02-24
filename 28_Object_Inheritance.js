
let animal = {
    species: "Unknows",
    greet() {
        console.log(`Hello,I am a ${this.species}`);
    }
};

console.log("Inheriting properties using Object.create()");
let dog = Object.create(animal);
dog.species = "Dog";
dog.bark = function () {
    console.log("Woof!");
}

dog.greet();
dog.bark();




//------------------------------------------------
console.log("Class-Based Inheritance (ES6 class syntax)");
class Animal {
    constructor(species) {
        this.species = species || "Unknown";
    }
    greet() {
        console.log(`Hello, I am a ${this.species}`);
    }
}

class Dog extends Animal {

    constructor() {
        super("Dog");
    }
    bark() {
        console.log("Woof!");
    }
}

let myDog = new Dog();
myDog.greet();
myDog.bark();
