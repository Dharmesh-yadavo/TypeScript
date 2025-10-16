"use strict";
// **********************************
/* GETTER & SETTER */
// **********************************
Object.defineProperty(exports, "__esModule", { value: true });
// /? In TypeScript classes, you can use getter and setter methods to control the access
// or modification of class properties. Getter methods allow you to retrieve the value
// of a property, while setter methods allow you to set the value of a property with
// additional logic or validation.
// //TODO The get method doesn't take any parameters, and the set method takes only one
// parameter.
class Persons {
    name;
    hobbies;
    // 💥 NEW: Backing Property (or Private Variable)
    // This private property stores the actual value for 'age'.
    // The underscore (_) is a common convention to distinguish it from the public getter/setter name 'age'.
    _age;
    // Constructor is updated: removed 'age' as a parameter since it's set later via the setter.
    constructor(name, hobbies) {
        this.name = name;
        this.hobbies = hobbies;
    }
    // 💥 NEW: Setter Method (using the 'set' keyword)
    // It allows you to assign a value using property-like syntax (e.g., persons1.age = 12).
    // It includes validation logic before the value is stored.
    set age(age) {
        if (age > 150 || age < 0) {
            throw new Error("age is not valid");
        }
        // Stores the validated value in the private backing property.
        this._age = age;
    }
    // 💥 NEW: Getter Method (using the 'get' keyword)
    // It allows you to retrieve the value using property-like syntax (e.g., persons1.age).
    get age() {
        if (this._age === undefined) {
            throw new Error("age is not defined");
        }
        // Returns the value from the private backing property.
        return this._age;
    }
    introduceParent() {
        // Accesses the private backing property to include the age in the introduction.
        return `Hi, I'm ${this.name} and I'm ${this._age} 
    years old. I love ${this.hobbies.join(", ")}.`;
    }
}
// --- Usage Demonstrating Getter/Setter Access ---
// Constructor only takes 'name' and 'hobbies' now.
const persons1 = new Persons("vinod", ["reading", "painting"]);
// // persons1.age(512); // Incorrect way to use setter
// 💥 NEW: Using the Setter
persons1.age = 12; // This line CALLS the 'public set age(age: number)' method
console.log(persons1.introduceParent());
// 💥 NEW: Using the Getter
console.log(persons1.age); // This line CALLS the 'public get age(): number' method
//^ Homework:
//? Q1: Bank Account Balance
// Create a TypeScript class BankAccount with a private property _balance initialized to
// 0.
// Implement a getter method balance that returns the current balance.
// Implement a setter method balance that updates the balance if the new value is non-
// negative. Otherwise, log an error message.
// Instantiate an object of the BankAccount class.
// Use the setter to set the balance to 1000 and use the getter to display the updated
// balance.
// Try setting a negative balance using the setter. What output do you expect?
class BankAccount {
    name;
    _balance = 0;
    constructor(name) {
        this.name = name;
    }
    set balance(balance) {
        if (balance < 0) {
            throw new Error("Invalid balance input !");
        }
        this._balance = balance;
    }
    get balance() {
        if (this._balance === undefined) {
            throw new Error("Invalid Balance");
        }
        return this._balance;
    }
}
const p1 = new BankAccount("Dharmesh");
p1.balance = 1200;
console.log(p1.balance);
// p1.balance = -10;
// console.log(p1.balance); // Invalid balance input !
//? Q2: Temperature Converter
// Define a TypeScript class Temperature with a private property _celsius set to 0.
// Implement a getter method celsius that returns the temperature in Celsius.
// Implement a setter method celsius that sets the temperature in Celsius.
// Implement a getter method fahrenheit that converts Celsius to Fahrenheit using the
// formula (C * 9/5) + 32.
// Implement a setter method fahrenheit that converts Fahrenheit to Celsius using the
// formula (F - 32) * 5/9.
// Create an instance of the Temperature class.
// Use the setter to set the temperature in Celsius to 25 and then use the getter for
// Fahrenheit. What Fahrenheit value do you expect?
// Use the setter to set the temperature in Fahrenheit to 98.6 and then use the getter
// for Celsius. What Celsius value do you expect?
class Temperature {
    _celsius = 0;
    set celsius(celcius) {
        this._celsius = celcius;
    }
    get celsius() {
        return this._celsius;
    }
    set fahrenheit(fahrenheit) {
        this._celsius = ((fahrenheit - 32) * 5) / 9;
    }
    get fahrenheit() {
        return (this._celsius * 9) / 5 + 32;
    }
}
const temp1 = new Temperature();
temp1.celsius = 25;
console.log(temp1.fahrenheit);
temp1.fahrenheit = 98.6;
console.log(temp1.celsius);
