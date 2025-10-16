//**********************************
/* Inheritance in TS
//**********************************

/* Inheritance allows a class to reuse the functionality of an existing class without
rewriting it. */
/* Inheritance is a mechanism in which one class acquires the property of another
class. For example, a child inherits the traits of his/her parents. */

class Persons {
  name: string;
  age: number;
  hobbies: string[];

  constructor(name: string, age: number, hobbies: string[]) {
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
  }

  introduce(): string {
    return `Hi, I'm ${this.name} and I'm ${this.age}
    years old. I love ${this.hobbies.join(", ")}.`;
  }
}

//* way for calling a inheriting class or, more commonly, a derived class (or Subclass/Child Class).
//* The keyword extends in the code explicitly indicates this relationship:
class Students extends Persons {
  grade: number;

  constructor(name: string, age: number, hobbies: string[], grade: number) {
    super(name, age, hobbies);
    this.grade = grade;
  }

  // The super keyword is specifically designed for use inside a subclass
  //  to correctly access the parent class's members while still operating on the current object instance.
  introduce(): string {
    return `${super.introduce()} .I am in grade ${this.grade}`;
  }
}

const persons1: Persons = new Persons("vinod", 12, ["reading", "painting"]);
const persons2: Persons = new Persons("thapa", 15, ["coding", "sports"]);
const students1: Persons = new Students(
  "bahadur",
  25,
  ["coding", "sports"],
  10
);

console.log(students1.introduce());
