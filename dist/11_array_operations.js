"use strict";
//? Arrays in TypeScript come with built-in methods that allow you to perform common operations
Object.defineProperty(exports, "__esModule", { value: true });
const fruits = ["apple", "banana", "orange", "mango"];
// a) Adding elements to an array using push:
const newUpdatedFruits = fruits.push("Kiwi");
console.log(newUpdatedFruits); // 5
console.log(fruits);
// b) removing elemts from the array
const lastData = fruits.pop();
console.log(lastData); // Kiwi
//! Iterating over elements
// ? You can iterate over the elements of an array using various looping constructs such as for, for...of, or array methods like forEach.
// Using for loop
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// Using for of loop
for (const fruit of fruits) {
    console.log(fruit);
}
// Using forEach loop
fruits.forEach((curVal) => console.log(curVal));
