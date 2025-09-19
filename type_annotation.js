// in typeScript type annotation is a way of specifying the type of a variable,
// function parameter, or function return value
// ! Advantages
//? It helps the TypeScript compiler to
//? enforce type checking and provide type safety during development.
//? what operations could we performed on that variable or value
// Type annotations are expressed by using a colon (:)
// followed by the desired type after the variable or function
// parameter declaration. There can be a space after the colon.
//~ Numbers:
var myFavNum = 10;
var myAge = 21;
// let invalidResult: number = myAge + " years"; //* invalid
// let invalidValue: number = "123"; //* invalid
// let computedValue: number = Math.sqrt(16); //* valid
// let nanValue: number = NaN; //!
//~ String:
var myFullNAme = "Dharmesh Yadav";
var firstName = "Dharmesh";
var lastName = "Yadav";
myFullNAme = firstName + lastName;
console.log(myFavNum);
// todo string length
var sentence = "please vote for me ";
var sentenceLength = sentence.length;
var sentenceUpper = sentence.toUpperCase();
var sentenceLower = sentence.toUpperCase();
// todo 👉  Substring:
// Declare a variable longText of type string and assign it a long sentence.
// Extract the first 10 characters from longText and store them in a variable called shortText.
var longText = "My name is Dharmesh Yadav in short dharma the pro.";
var shortText = longText.substring(0, 10);
//  todo 👉  String Comparison:
// Declare two variables str1 and str2 of type string and assign them different sentences.
// Compare the two strings and store the result (true or false) in a variable called areEqual.
var str1 = "hello";
var str2 = "hi";
var areEqual = str1 == str2;
console.log("areEqual: ", areEqual);
//  todo 👉  String Template:
// Declare variables product and price of type string and number, respectively.
// Create a string using template literals to display the product and its price in the format
// "The product {product} is priced at {price} dollars."
var product = "iPhone 17";
var price = 100000;
console.log("The product " + product + " is priced at " + price + " dollars.");
console.log("The product ".concat(product, " is priced at ").concat(price, " dollars."));
