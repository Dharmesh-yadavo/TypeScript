/* The function call signature refers to the declaration or definition of a function,which includes the
function's name, parameters, and return type. It defines the structure and type information of a function
without including the function's implementation or body. */
var student1 = {
    name: "Dharmesh",
    age: 21,
    greet: function (country) {
        return "Welcome my name is ".concat(student1.name, ", I am ").concat(student1.age, "yrs old & I am from ").concat(country);
    },
};
// const functionn: () => void = (): void => {}
var introduction = function (student1) {
    var name = student1.name, age = student1.age;
    return "Welcome my name is ".concat(name, ", I am ").concat(age, " yrs old");
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
