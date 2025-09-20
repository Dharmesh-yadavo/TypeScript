//*In TypeScript, a type alias is a way to give a name to a specific type or combination of types.
// It allows you to create a custom name for a type, making it easier to reuse and refer to the
// same type in different parts of your code. Type aliases provide better readability, organization, and
// abstraction of complex types

//* To define a type alias, you use the type keyword followed by the alias name and the type definition:

type Person = {
  name: string;
  age: number;
  isStudent: boolean;
  address: { city: string; country: string };
};

const person: Person = {
  name: "Dharmesh Yadav",
  age: 21,
  isStudent: true,
  address: {
    city: "delhi",
    country: "India",
  },
};

const person1: Person = {
  name: "Dheeraj Yadav",
  age: 21,
  isStudent: true,
  address: {
    city: "delhi",
    country: "India",
  },
};

const person2: Person = {
  name: "Kunal",
  age: 16,
  isStudent: true,
  address: {
    city: "haryana",
    country: "India",
  },
};

//! Calculate Total Price:

type Product = {
  name: string;
  price: number;
  quantity: number;
};

const product: Product = {
  name: "Laptop",
  price: 1000,
  quantity: 5,
};

//? Given the product object from the previous question, write a function called calculateTotalPrice
//? that calculates and returns the total price (price * quantity) of the product.

const calculateTotalPrice = (product: Product) => {
  return `${product.name} total cost ${product.price * product.quantity}`;
};
console.log(calculateTotalPrice(product));
