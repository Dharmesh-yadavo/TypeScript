"use strict";
// In TypeScript, tuples are a data structure that allows you to store a fixed-size collection of elements
// of different types. They are similar to arrays, but with a key difference: the types of elements in a
// tuple are fixed and declared at the time of creation, whereas arrays can hold elements of the same type,
//  and their size can vary.
Object.defineProperty(exports, "__esModule", { value: true });
// by readonly it will strictly follow the rules of defining array and will not add new element
// function to display person information
const displayPersonInfo = (person) => {
    const [name, age, driverLicense] = person;
    return `Name: ${name}, Age: ${age}, DriverLicense: ${driverLicense ? "Yes" : "No"}`;
};
// Example usage:
const person1 = ["Dharmesh", 21, true];
const person2 = ["Jai", 12, false];
console.log(displayPersonInfo(person1));
console.log(displayPersonInfo(person2));
const displayProductInfo = (product) => {
    const [name, price, quantity] = product;
    return `Name: ${name} - Price: ${price} - Quantity: ${quantity}`;
};
const product1 = ["ball", 30, 3];
console.log(displayProductInfo(product1));
//~ Question 2:
// You are creating a student management system and want to keep track of student grades for different subjects.
//  Define a tuple type called SubjectGrade to represent a subject and its corresponding grade,
// containing the following elements:
// Subject name (string)
// Grade (number)
// Create an array of SubjectGrade tuples to store the grades for a student in three different
// subjects: Math, English, and Science. Calculate and display the average grade for the student.
//&
// type SubjectGrade = readonly [string, number];
// const displayAverageGrade: (student: SubjectGrade) => string = (
//   student: SubjectGrade
// ): string => {
//   const [subjectName, grade] = student;
//   return `SubjectName: ${subjectName} - Grade: ${grade}`;
// };
// const student1: SubjectGrade = ["Math", 89];
// const student2: SubjectGrade = ["English", 91];
// const student3: SubjectGrade = ["Science", 94];
//~ Question 3:
// You are working on a weather application, and you need to store weather data for different cities.
//  Define a tuple type called WeatherData to represent the weather information, containing the
// following elements:
// City name (string)
// Temperature in Celsius (number)
// Weather condition (string)
// Create a function called displayWeather that takes an array of WeatherData tuples as input and displays
//  the information for each city in a user-friendly format
