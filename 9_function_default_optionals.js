//? Optional and Default Parameters:
/* TypeScript allows you to define optional and default
parameters in functions. */
/* Optional parameters are denoted by appending a ? symbol
after the parameter name, */
/* and default parameters are specified by providing a
default value in the parameter declaration. */
//! Default Parameter:
var greet = function (name, id) {
    return "Welcome, ".concat(name, " and ur id is ").concat(id, ".");
};
console.log(greet("Dharmesh", 23));
//! Optional Parameter:
var greet3 = function (name, id) {
    if (!id) {
        return "Welcome, ".concat(name);
    }
    return "Welcome, ".concat(name, " and ur id is ").concat(id, ".");
};
console.log(greet3("Dharmesh"));
console.log(greet3("Dharmesh", 17));
