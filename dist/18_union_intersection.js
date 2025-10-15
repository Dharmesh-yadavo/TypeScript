"use strict";
//? Union types allow you to specify that a variable can hold values of multiple types. You use the | (pipe) symbol to define a union type.
/* In TypeScript, when using a union type, it is essential to ensure that at least
one of the types in the union includes all the required properties. Failure to do so
will result in a type error during compilation.
*/
Object.defineProperty(exports, "__esModule", { value: true });
const inputValue = (value) => { };
inputValue(55);
inputValue("hello world");
inputValue(true);
/* Practice, we'll create a function that can accept different types of arguments
and perform different actions based on the type of the input. Suppose we want to
create a function that doubles the value if the input is a number, or converts the
input to uppercase if it's a string. To achieve this, we can use a union type to
allow the function to accept both numbers and strings.
*/
// define
const userInput = (value) => {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    else if (typeof value === "number") {
        return value * 2;
    }
    else {
        throw new Error("Invalid input data");
    }
};
console.log(userInput(10));
console.log(userInput("Dance"));
//todo HOMEWORK TIME By Thapa Technical
//?we want to create a function that formats the value passed to it in a specific way based on its type:
//? If the input is a number, it should add a dollar sign and format it with two decimal places.
//? If the input is a boolean, it should return "Yes" for true and "No" for false.
//? If the input is a string, it should capitalize the first letter.
const userIn = (val) => {
    if (typeof val === "number") {
        return `$${val.toFixed(2)}`;
    }
    else if (typeof val === "boolean") {
        return val === true ? "Yes" : "No";
    }
    else if (val === "string") {
        return val.charAt(0).toUpperCase();
    }
    else {
        return "Error";
    }
};
console.log(userIn(45));
console.log(userIn("Yes"));
console.log(userIn("passion"));
const employee = {
    name: "vinod",
    age: 29,
    emp_id: 1111,
    department: "IT",
};
const myPersonalInfo = {
    name: "vinod",
    age: 29,
};
const user = { name: "vinod", age: 29 };
const myLocation = { city: "Pune", country: "India" };
// defined
const createUserProfile = (user, location) => {
    // return `my name is ${user.name} and I am living in city: ${location.city}`
    return { ...user, ...location };
};
// call
const myCompleteInfo = createUserProfile(user, myLocation);
console.log(myCompleteInfo);
const userz = {
    id: 1117156,
    name: "Dharmesh",
    email: "yadavDharmesh230^@gmail.com",
};
const account = {
    accountId: 2339012233,
    accountType: "Saving",
    balance: 10000000000,
};
const combineUserAndAccount = (userz, account) => {
    return { ...userz, ...account };
};
const personInfo = combineUserAndAccount(userz, account);
console.log(personInfo);
