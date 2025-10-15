/* The function call signature refers to the declaration or definition of a function,which includes the 
function's name, parameters, and return type. It defines the structure and type information of a function 
without including the function's implementation or body. */

//? lets add one function inside the object. It's more like creating a method in object

//? Very Important => call signatures are typically used inside object type notations to describe the
//? shape of functions within object types.

type Student = {
  name: string;
  age: number;
  gender?: string;
  greet: (country: string) => string; // method call signature
};

const student1: Student = {
  name: "Dharmesh",
  age: 21,
  greet: (country): string =>
    `Welcome my name is ${student1.name}, I am ${student1.age}yrs old & I am from ${country}`,
};

// const function: () => void = (): void => {}

const introduction: (student1: Student) => string = (student1): string => {
  const { name, age } = student1;
  return `Welcome my name is ${name}, I am ${age} yrs old`;
};

console.log(introduction(student1));
console.log(student1.greet("India"));

//!HomeWork

// Watch this video and let me know why I used the call signature 👉 https://youtu.be/N_fm180k5k0

// type Student = {
// name:string;
// age:number;
// gender?:string;
// (country:string): string // call signature
// } What is this all about? https://www.typescriptlang.org/docs/handbook/2/function
