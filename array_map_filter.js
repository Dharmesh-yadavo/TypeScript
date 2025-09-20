var numbers = [10, 20, 30, 40, 50, 60];
//! Map method:
/* The map method creates a new array by applying a provided function to each element of the original array.
It transforms each element and returns a new array with the transformed values. */
//? 1: Doubling each number
var doubleData = numbers.map(function (curVal) { return curVal * 2; });
console.log(doubleData);
//? 2: Converting numbers to string
var numberToString = numbers.map(function (curElem) {
    return curElem.toString();
});
console.log(numberToString);
//! Filter method:
//? 1: Filtering even numbers
var evenNumbers = numbers.filter(function (curElem) { return curElem % 2 === 0; });
console.log(evenNumbers);
//? 2: Filtering numbers gretaer than 3
var numberGreaterThanThree = numbers.filter(function (curElem) { return curElem > 3; });
console.log(numberGreaterThanThree);
//todo Homework Time
//* Practice questions for map:
//? 1: Given an array of strings representing names, create a new array that contains
//? the uppercase version of each name.
var arrName = ["dheeraj", "dharmesh", "deepak", "kunal"];
var upperArrName = arrName.map(function (curElem) {
    return curElem.toUpperCase();
});
console.log(upperArrName);
//? 2: Given an array of numbers, create a new array that contains the square of each number.
var squareOfNumber = numbers.map(function (curElem) { return Math.pow(curElem, 2); });
console.log(squareOfNumber);
//* Practice questions for filter:
//? 1: Given an array of strings, create a new array that contains only the strings
//? with a length greater than 4.
var namesArr = ["Alice", "Bob", "Anna", "Andrew", "Glex"];
var stringGreaterThanFour = namesArr.filter(function (curVal) { return curVal.length > 4; });
console.log(stringGreaterThanFour);
//? 2: Given an array of strings, filter out the names that start with the letter "A".
var letterStartWithA = namesArr.filter(function (curVal) { return curVal.charAt(0) === "A"; });
console.log(letterStartWithA);
