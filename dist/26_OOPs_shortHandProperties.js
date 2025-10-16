"use strict";
// The access rules for class members in TypeScript:
Object.defineProperty(exports, "__esModule", { value: true });
// ----------------------------------------------------
// | Modifier  | Parent Class | Child Class | Outside Class |
// |-----------|--------------|-------------|---------------|
// | public    |      ✅      |     ✅      |       ✅      |
// | protected |      ✅      |     ✅      |       ❌      |
// | private   |      ✅      |     ❌      |       ❌      |
// ----------------------------------------------------
class Persons {
    name;
    age;
    hobbies;
    // Constructor Shorthand:
    // By adding 'public' or 'protected' to parameters, TypeScript
    // automatically declares and initializes the class properties (name, age, hobbies).
    constructor(name, age, hobbies // Accessible in Persons and any class that extends Persons (Students)
    ) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    // A method in the base class to introduce the person.
    introduceParent() {
        return `Hi, I'm ${this.name} and I'm ${this.age} years old. I love ${this.hobbies.join(", ")}.`;
    }
}
class Students extends Persons {
    grade;
    // 'extends Persons' creates the inheritance relationship.
    // 'public grade: number' automatically declares and initializes the 'grade' property.
    constructor(name, age, hobbies, grade) {
        // 💥 Key Point: 'super()' must be called first in a subclass constructor.
        // It passes control (and arguments) to the parent class constructor to initialize
        // the inherited properties (name, age, hobbies).
        super(name, age, hobbies);
        this.grade = grade;
    }
    // Method Overriding: This method replaces the parent's introduce method.
    introduce() {
        // 'super.introduceParent()' calls the parent's method to get the base introduction
        // string, promoting code reuse.
        // 'this.grade' is accessible as it's a property of the Students class.
        // 'this.hobbies' is accessible because it's 'protected' in the Persons class.
        return `${super.introduceParent()} I am in grade ${this.grade} and I enjoy ${this.hobbies.join(", ")}.`;
    }
}
// --- Usage ---
const persons1 = new Persons("vinod", 12, ["reading", "painting"]);
console.log(persons1.introduceParent());
// Output: Hi, I'm vinod and I'm 12 years old. I love reading, painting.
const students1 = new Students("bahadur", 25, ["coding", "sports"], 10 // grade
);
console.log(students1.introduce());
// Output: Hi, I'm bahadur and I'm 25 years old. I love coding, sports. I am in grade 10 and I enjoy coding, sports.
