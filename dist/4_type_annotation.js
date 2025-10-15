"use strict";
// in typeScript type annotation is a way of specifying the type of a variable,
// function parameter, or function return value
Object.defineProperty(exports, "__esModule", { value: true });
// ! Advantages
//? It helps the TypeScript compiler to
//? enforce type checking and provide type safety during development.
//? what operations could we performed on that variable or value
// Type annotations are expressed by using a colon (:)
// followed by the desired type after the variable or function
// parameter declaration. There can be a space after the colon.
//~ Numbers:
let myFavNum = 10;
let myAge = 21;
// let invalidResult: number = myAge + " years"; //* invalid
// let invalidValue: number = "123"; //* invalid
// let computedValue: number = Math.sqrt(16); //* valid
// let nanValue: number = NaN; //!
//~ String:
let myFullNAme = "Dharmesh Yadav";
let firstName = "Dharmesh";
let lastName = "Yadav";
myFullNAme = firstName + lastName;
console.log(myFavNum);
// todo string length
let sentence = "please vote for me ";
let sentenceLength = sentence.length;
let sentenceUpper = sentence.toUpperCase();
let sentenceLower = sentence.toUpperCase();
// todo 👉  Substring:
// Declare a variable longText of type string and assign it a long sentence.
// Extract the first 10 characters from longText and store them in a variable called shortText.
let longText = "My name is Dharmesh Yadav in short dharma the pro.";
let shortText = longText.substring(0, 10);
//  todo 👉  String Comparison:
// Declare two variables str1 and str2 of type string and assign them different sentences.
// Compare the two strings and store the result (true or false) in a variable called areEqual.
const str1 = "hello";
const str2 = "hi";
const areEqual = str1 == str2;
console.log("areEqual: ", areEqual);
//  todo 👉  String Template:
// Declare variables product and price of type string and number, respectively.
// Create a string using template literals to display the product and its price in the format
// "The product {product} is priced at {price} dollars."
let product = "iPhone 17";
let price = 100000;
console.log("The product " + product + " is priced at " + price + " dollars.");
console.log(`The product ${product} is priced at ${price} dollars.`);
