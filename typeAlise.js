//*In TypeScript, a type alias is a way to give a name to a specific type or combination of types.
// It allows you to create a custom name for a type, making it easier to reuse and refer to the
// same type in different parts of your code. Type aliases provide better readability, organization, and
// abstraction of complex types
var person = {
    name: "Dharmesh Yadav",
    age: 21,
    isStudent: true,
    address: {
        city: "delhi",
        country: "India",
    },
};
var person1 = {
    name: "Dheeraj Yadav",
    age: 21,
    isStudent: true,
    address: {
        city: "delhi",
        country: "India",
    },
};
var person2 = {
    name: "Kunal",
    age: 16,
    isStudent: true,
    address: {
        city: "haryana",
        country: "India",
    },
};
var product = {
    name: "Laptop",
    price: 1000,
    quantity: 5,
};
//? Given the product object from the previous question, write a function called calculateTotalPrice
//? that calculates and returns the total price (price * quantity) of the product.
var calculateTotalPrice = function (product) {
    return "".concat(product.name, " total cost ").concat(product.price * product.quantity);
};
console.log(calculateTotalPrice(product));
