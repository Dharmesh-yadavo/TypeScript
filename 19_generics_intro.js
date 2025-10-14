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
function logAndReturn(value) {
    return value;
}
// using generic fxnwith different types
var numberResult = logAndReturn(42);
var stringResult = logAndReturn("Hello, Generics!");
var booleanResult = logAndReturn(true);
console.log(numberResult);
console.log(stringResult);
console.log(booleanResult);
function add(a, b) {
    return a + b;
}
var result1 = add(5, 10); // Output: 15
var result2 = add("Hello, ", "world!"); // Output: "Hello, world!"
console.log(result1);
console.log(result2);
//?? You need to code the same using he Generics Types.
