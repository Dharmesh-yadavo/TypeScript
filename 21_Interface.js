/* In TypeScript, an interface is a powerful feature that allows you to define a
contract for an object's shape. It specifies the properties and their types that an
object must have to be considered of that particular interface type. Interfaces are
primarily used for type-checking during development and do not generate any JavaScript
code at runtime.
*/
var greets = {
    name: "vinod",
    age: 29,
};
var product1 = {
    name: "Laptop",
    price: 1000,
    quantity: 5,
};
var product2 = {
    name: "PC",
    price: 10000,
    quantity: 10,
};
//! Calculate Total Price:
//? Given the product object from the previous question, write a function called
// calculateTotalPrice that calculates and returns the total price (price * quantity) of
// the product.
var calculateTotalPrices = function (product) {
    var price = product.price, quantity = product.quantity;
    return price * quantity;
};
// call
console.log(calculateTotalPrices(product1));
console.log(calculateTotalPrices(product2));
