"use strict";
/* Generics in TypeScript allow you to create reusable components or functions that
can work with multiple data types.
*/
Object.defineProperty(exports, "__esModule", { value: true });
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
function logAndReturn(value) {
    return value;
}
// using generic fxnwith different types
const numberResult = logAndReturn(42);
const stringResult = logAndReturn("Hello, Generics!");
const booleanResult = logAndReturn(true);
console.log(numberResult);
console.log(stringResult);
console.log(booleanResult);
function add(a, b) {
    return a + b;
}
const result1 = add(5, 10); // Output: 15
const result2 = add("Hello, ", "world!"); // Output: "Hello, world!"
console.log(result1);
console.log(result2);
//?? You need to code the same using he Generics Types.
