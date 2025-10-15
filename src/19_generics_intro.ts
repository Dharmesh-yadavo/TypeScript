/* Generics in TypeScript allow you to create reusable components or functions that
can work with multiple data types.
*/

// function logAndReturn(
//   value: number | string | boolean
// ): number | string | boolean {
//   console.log(value);
//   return value;
// }

// const numberResult = logAndReturn(42);
// const stringResult = logAndReturn("Hello, Generics!");
// const booleanResult = logAndReturn(true);

// console.log(numberResult);
// console.log(stringResult);
// console.log(booleanResult);

//! Generic fxn to logAndReturn an input value:
function logAndReturn<T>(value: T): T {
  return value;
}
// using generic fxnwith different types
const numberResult = logAndReturn<number>(42);
const stringResult = logAndReturn<string>("Hello, Generics!");
const booleanResult = logAndReturn<boolean>(true);

console.log(numberResult);
console.log(stringResult);
console.log(booleanResult);

//^ Homework Time

//!! Here is the function overloading Example? Which I will tell you in tomorrow video
function add<T>(a: T, b: T): T;
function add<T>(a: T, b: T): T;
function add(a: any, b: any): any {
  return a + b;
}

const result1 = add<number>(5, 10); // Output: 15
const result2 = add<string>("Hello, ", "world!"); // Output: "Hello, world!"

console.log(result1);
console.log(result2);

//?? You need to code the same using he Generics Types.
