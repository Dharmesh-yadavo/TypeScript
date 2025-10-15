"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const numbers = [10, 20, 30, 40, 50, 60];
//! Map method:
/* The map method creates a new array by applying a provided function to each element of the original array.
It transforms each element and returns a new array with the transformed values. */
//? 1: Doubling each number
const doubleData = numbers.map((curVal) => curVal * 2);
console.log(doubleData);
//? 2: Converting numbers to string
const numberToString = numbers.map((curElem) => curElem.toString());
console.log(numberToString);
//! Filter method:
//? 1: Filtering even numbers
const evenNumbers = numbers.filter((curElem) => curElem % 2 === 0);
console.log(evenNumbers);
//? 2: Filtering numbers gretaer than 3
const numberGreaterThanThree = numbers.filter((curElem) => curElem > 3);
console.log(numberGreaterThanThree);
//todo Homework Time
//* Practice questions for map:
//? 1: Given an array of strings representing names, create a new array that contains
//? the uppercase version of each name.
const arrName = ["dheeraj", "dharmesh", "deepak", "kunal"];
const upperArrName = arrName.map((curElem) => curElem.toUpperCase());
console.log(upperArrName);
//? 2: Given an array of numbers, create a new array that contains the square of each number.
const squareOfNumber = numbers.map((curElem) => curElem ** 2);
console.log(squareOfNumber);
//* Practice questions for filter:
//? 1: Given an array of strings, create a new array that contains only the strings
//? with a length greater than 4.
const namesArr = ["Alice", "Bob", "Anna", "Andrew", "Glex"];
const stringGreaterThanFour = namesArr.filter((curVal) => curVal.length > 4);
console.log(stringGreaterThanFour);
//? 2: Given an array of strings, filter out the names that start with the letter "A".
const letterStartWithA = namesArr.filter((curVal) => curVal.charAt(0) === "A");
console.log(letterStartWithA);
