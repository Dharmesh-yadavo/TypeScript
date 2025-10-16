"use strict";
// /?
// /?           | Parent Class | Child Class | Outside Class |
// /? Public   |      ✅       |     ✅      |       ✅      |
// /? Protected|      ✅       |     ✅      |       ❌      |
// /? Private  |      ✅       |     ❌      |       ❌      |
Object.defineProperty(exports, "__esModule", { value: true });
class Persons {
    name;
    age; // Defaults to public in TypeScript if no keyword is used
    hobbies;
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    introduceParent() {
        return `Hi, I'm ${this.name} and I'm ${this.age}
    years old. I love ${this.hobbies.join(", ")}.`;
    }
}
class Students extends Persons {
    grade;
    constructor(name, age, hobbies, grade) {
        // 💥 Key Point: 'super()' must be called first in a subclass constructor.
        // It passes control (and arguments) to the parent class constructor to initialize
        // the inherited properties (name, age, hobbies).
        super(name, age, hobbies);
        this.grade = grade;
    }
    introduce() {
        // return `${super.introduce()} .I am in grade ${this.grade}`; // Commented out
        return `${super.introduceParent()} .I am in grade ${this.grade}`;
        // return this.hobbies; // This would cause an error because 'hobbies' is private in Persons
    }
}
const persons1 = new Persons("vinod", 12, ["reading", "painting"]);
console.log(persons1.introduceParent());
const students1 = new Students("bahadur", 25, ["coding", "sports"], 10);
console.log(students1.introduce());
