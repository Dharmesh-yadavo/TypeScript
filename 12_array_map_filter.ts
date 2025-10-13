const numbers: number[] = [10, 20, 30, 40, 50, 60];

//! Map method:
/* The map method creates a new array by applying a provided function to each element of the original array. 
It transforms each element and returns a new array with the transformed values. */

//? 1: Doubling each number
const doubleData = numbers.map((curVal: number) => curVal * 2);
console.log(doubleData);

//? 2: Converting numbers to string
const numberToString: string[] = numbers.map((curElem: number) =>
  curElem.toString()
);
console.log(numberToString);

//! Filter method:

//? 1: Filtering even numbers
const evenNumbers: number[] = numbers.filter(
  (curElem: number) => curElem % 2 === 0
);
console.log(evenNumbers);

//? 2: Filtering numbers gretaer than 3
const numberGreaterThanThree: number[] = numbers.filter(
  (curElem: number) => curElem > 3
);
console.log(numberGreaterThanThree);

//todo Homework Time

//* Practice questions for map:
//? 1: Given an array of strings representing names, create a new array that contains
//? the uppercase version of each name.
const arrName: string[] = ["dheeraj", "dharmesh", "deepak", "kunal"];
const upperArrName: string[] = arrName.map((curElem: string) =>
  curElem.toUpperCase()
);
console.log(upperArrName);

//? 2: Given an array of numbers, create a new array that contains the square of each number.
const squareOfNumber = numbers.map((curElem: number) => curElem ** 2);
console.log(squareOfNumber);

//* Practice questions for filter:
//? 1: Given an array of strings, create a new array that contains only the strings
//? with a length greater than 4.
const namesArr: string[] = ["Alice", "Bob", "Anna", "Andrew", "Glex"];
const stringGreaterThanFour = namesArr.filter(
  (curVal: string) => curVal.length > 4
);
console.log(stringGreaterThanFour);

//? 2: Given an array of strings, filter out the names that start with the letter "A".
const letterStartWithA: string[] = namesArr.filter(
  (curVal: string) => curVal.charAt(0) === "A"
);
console.log(letterStartWithA);
