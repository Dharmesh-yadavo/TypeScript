"use strict";
//* In TypeScript, objects are used to represent data with key-value pairs.
//* Each key in the object is a string (or a symbol in ES6) that maps to a value.
Object.defineProperty(exports, "__esModule", { value: true });
// ? Let's consider a real-life example of representing a person's information using TypeScript objects
// ? ℹ️ -> name, age, isStudent, address{ city, country }
const person = {
    name: "Dharmesh Yadav",
    age: 21,
    isStudent: true,
    address: {
        city: "delhi",
        country: "India",
    },
};
const person1 = {
    name: "Dheeraj Yadav",
    age: 21,
    isStudent: true,
    address: {
        city: "delhi",
        country: "India",
    },
};
const person2 = {
    name: "Kunal",
    age: 16,
    isStudent: true,
    address: {
        city: "haryana",
        country: "India",
    },
};
// Todo Accessing the object data
console.log(person.address.country);
// Todo Updatingobject properties
person.address.city = "pune";
console.log(person.address.city);
//! Homework
//?Create a Product Object:
//Define a product with properties for name, price, and quantity.Create a product object with the following data:
// Name: "Laptop"
// Price: 1000
// Quantity: 5
const product = {
    name: "Laptop",
    price: 1000,
    quantity: 5,
};
