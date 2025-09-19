//* Boolean Type:
//? In TypeScript, the boolean type represents a value that can be either true or
//? false. It is one of the basic primitive types in the language.
var isMyNameVinod = true;
var isDone = true;
var hasStarted = false;
// hasStarted = "yes" // invalid
// !Question: Check Even Number
// /* Write a TypeScript function called isEven that takes a number as a
// /* parameter and returns true if the number is even and false otherwise.
function isEven(a) {
    return a % 2 == 0;
}
// function call
console.log(isEven(5));
// todo Homework: write a TypeScript function called isDivisible By 4 And 8 that takes a number as a
// todo ...as a parameter and returns true if the number is divisible by both 4 and 8.
function isDivisible(a) {
    return a % 4 == 0 && a % 8 == 0;
}
console.log(isDivisible(8));
//* BigInt Type
//? It is a built-in type that allows you to work with numbers that are larger than the range supported
//? by the regular number type.
//? BigInt literals are written by appending the n suffix to an integer literal.
//? In JS we can't read the whole numbers beyond 2 raise to power 53
// let maxNumber = Number.MAX_SAFE_INTEGER;
var bigNumber = 9007199254740991n;
// console.log(bigNumber);
var anotherBigNumber = BigInt("90071992547409915");
// console.log(anotherBigNumber);
//! Assignment
var sum = bigNumber + anotherBigNumber;
console.log("sum = " + sum);
var difference = bigNumber - anotherBigNumber;
console.log(difference);
var product = bigNumber * anotherBigNumber;
console.log(product);
var division = bigNumber / anotherBigNumber;
console.log(division);
