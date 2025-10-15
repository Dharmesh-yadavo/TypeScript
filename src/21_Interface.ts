/* In TypeScript, an interface is a powerful feature that allows you to define a
contract for an object's shape. It specifies the properties and their types that an
object must have to be considered of that particular interface type. Interfaces are
primarily used for type-checking during development and do not generate any JavaScript
code at runtime.
*/

interface Greet {
  name: string;
  age: number;
}

const greets: Greet = {
  name: "vinod",
  age: 29,
};

//todo Create a Product Object:

//? Define an interface or type representing a product with properties for name,
// price, and quantity. Create a product object with the following data:
// Name: "Laptop"
// Price: 1000
// Quantity: 5

interface Products {
  name: string;
  price: number;
  quantity: number;
}

const product1: Products = {
  name: "Laptop",
  price: 1000,
  quantity: 5,
};

const product2: Products = {
  name: "PC",
  price: 10000,
  quantity: 10,
};

//! Calculate Total Price:
//? Given the product object from the previous question, write a function called
// calculateTotalPrice that calculates and returns the total price (price * quantity) of
// the product.

const calculateTotalPrices = (product: Products): number => {
  const { price, quantity } = product;
  return price * quantity;
};

// call
console.log(calculateTotalPrices(product1));
console.log(calculateTotalPrices(product2));
