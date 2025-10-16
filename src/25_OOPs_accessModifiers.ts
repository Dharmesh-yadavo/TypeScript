// /?
// /?           | Parent Class | Child Class | Outside Class |
// /? Public   |      ✅       |     ✅      |       ✅      |
// /? Protected|      ✅       |     ✅      |       ❌      |
// /? Private  |      ✅       |     ❌      |       ❌      |

class Persons {
  public name: string;
  age: number; // Defaults to public in TypeScript if no keyword is used
  private hobbies: string[];

  constructor(name: string, age: number, hobbies: string[]) {
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
  }

  introduceParent(): string {
    return `Hi, I'm ${this.name} and I'm ${this.age}
    years old. I love ${this.hobbies.join(", ")}.`;
  }
}

class Students extends Persons {
  grade: number;

  constructor(name: string, age: number, hobbies: string[], grade: number) {
    super(name, age, hobbies);
    this.grade = grade;
  }

  introduce(): string {
    // return `${super.introduce()} .I am in grade ${this.grade}`; // Commented out
    return `${super.introduceParent()} .I am in grade ${this.grade}`;
    // return this.hobbies; // This would cause an error because 'hobbies' is private in Persons
  }
}

const persons1: Persons = new Persons("vinod", 12, ["reading", "painting"]);
console.log(persons1.introduceParent());

const students1: Students = new Students(
  "bahadur",
  25,
  ["coding", "sports"],
  10
);

console.log(students1.introduce());
