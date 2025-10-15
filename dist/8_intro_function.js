"use strict";
//! Function Declaration:
/* You can declare a function using the function keyword, followed by the
 function name, a list of parameters enclosed in parentheses, and a return type. */
Object.defineProperty(exports, "__esModule", { value: true });
/* The function body contains the code that will be executed when the function is called. */
//! Function Invocation:
/* To execute a function, you simply invoke it by using its name followed by parentheses.
/* mYou can provide arguments (actual values) for the parameters defined in the
  function declaration. */
//! function call
// function greet(name: string, id: number) {
//   console.log(`Welcome, ${name} and your id is ${id}`);
// }
// function call
// greet("dharm", 23);
//! using arrow function
// const greet = (name: string, id: number) => {
//   console.log(`Welcome, ${name} and your id is ${id}`);
// };
// greet("dharm", 23);
//! Function return: How do you specify the return type of a function in
//! TypeScript?
/* To specify the return type of a function, you can use the colon (:)
 followed by the desired type after the function's parameter list. */
const greet = (name, id) => {
    return `Welcome, ${name} and your id is ${id}`;
};
greet("dharm", 23);
//TODO Practice Time
//? Write a function called isPalindrome that takes a string as a parameter
//? and returns true if the string is a palindrome (reads the same forwards and
//? backwards), and false otherwise.
const isPalindrome = (pali) => {
    let myPali = pali.split("").reverse().join("");
    return myPali === pali;
};
isPalindrome("12321");
//! Homework 🧑‍💻
//? 1: Create a function called calculateAverage that takes an array of
//? numbers as a parameter and returns the average of those numbers.
const calculateAverage = (arr) => {
    let arrLen = arr.length;
    let sum = arr.reduce((accum, curVal) => accum + curVal, 0);
    return sum / arrLen;
};
let arr = [10, 20, 30, 40, 50];
console.log(calculateAverage(arr));
//? 2: Write a function called findMaxValue that takes an array of numbers as
//? a parameter and returns the maximum value in the array.
const findMaxValue = (arr) => {
    if (arr.length === 0) {
        return undefined; // Or throw a new Error("Array cannot be empty")
    }
    return Math.max(...arr);
};
let arrys = [10, 20, 30, 40, 50];
console.log(findMaxValue(arrys));
