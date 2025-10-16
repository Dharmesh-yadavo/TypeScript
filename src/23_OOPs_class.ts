// **********************************
// /* How to crate a class and also instance of class in TS
// **********************************

// /* A class in terms of OOP is a blueprint for creating objects
// /* A class is like a blueprint for creating similar things.

// *? In TypeScript, there is a convention to use PascalCase (also known as
// UpperCamelCase) for class names. This means that class names should start with a
// capital letter and each subsequent word in the class name should also begin with a
// capital letter.

class Persons {
  name: string;
  age: number;
  hobbies: string[];

  constructor(name: string, age: number, hobbies: string[]) {
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
  }
}

// When 'new Persons(...)' is executed, the constructor
// inside the Persons class is automatically called
// with "vinod", 12, and ["reading", "painting"] as arguments.
const persons1: Persons = new Persons("vinod", 12, ["reading", "painting"]);
// Another instance, which also calls the constructor
const persons2: Persons = new Persons("thapa", 15, ["coding", "sports"]);
const persons3: Persons = new Persons("bahadur", 25, ["coding", "sports"]);

console.log(persons3);

class Home {
  size: number;
  floor: number;
  color: string;

  constructor(size: number, floor: number, color: string) {
    this.size = size;
    this.floor = floor;
    this.color = color;
  }
}

const home1: Home = new Home(1200, 4, "white");
console.log(home1);
