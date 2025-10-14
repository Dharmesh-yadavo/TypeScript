//? Union types allow you to specify that a variable can hold values of multiple types. You use the | (pipe) symbol to define a union type.
/* In TypeScript, when using a union type, it is essential to ensure that at least
one of the types in the union includes all the required properties. Failure to do so
will result in a type error during compilation.
*/
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var inputValue = function (value) { };
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
var userInput = function (value) {
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
var userIn = function (val) {
    if (typeof val === "number") {
        return "$".concat(val.toFixed(2));
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
var employee = {
    name: "vinod",
    age: 29,
    emp_id: 1111,
    department: "IT",
};
var myPersonalInfo = {
    name: "vinod",
    age: 29,
};
var user = { name: "vinod", age: 29 };
var myLocation = { city: "Pune", country: "India" };
// defined
var createUserProfile = function (user, location) {
    // return `my name is ${user.name} and I am living in city: ${location.city}`
    return __assign(__assign({}, user), location);
};
// call
var myCompleteInfo = createUserProfile(user, myLocation);
console.log(myCompleteInfo);
var userz = {
    id: 1117156,
    name: "Dharmesh",
    email: "yadavDharmesh230^@gmail.com",
};
var account = {
    accountId: 2339012233,
    accountType: "Saving",
    balance: 10000000000,
};
var combineUserAndAccount = function (userz, account) {
    return __assign(__assign({}, userz), account);
};
var personInfo = combineUserAndAccount(userz, account);
console.log(personInfo);
