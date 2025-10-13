/*
 * Type inference in TypeScript refers to the ability of the TypeScript compiler to
 * automatically determine and assign types to variables, expressions, and function
 * return values based on their usage and context in the code.
 */
// todo What are some best practices for using type inference in TypeScript?
// ? Use type inference for simple cases where the assigned value clearly indicates the
// ? intended type.
// ? When in doubt, provide explicit type annotations to make your intentions clear.
// ? Avoid relying too heavily on type inference when the assigned value is complex or
// ? ambiguous.
// ? Regularly review and refactor your code to ensure the inferred types align with
// ? your intentions.
//! Here are the two questions for practices 👇
/* 1: Declare a variable message and initialize it with the
value "Hello, TypeScript!". Infer the type of message using type
inference. */
var msg = "Hello";
// msg = 2;
/* 2: Write a function calculateArea that takes the length and
width parameters of type number and returns their product. Infer
the return type of the function using type inference. */
function calculateArea(a, b) {
    return a * b;
}
calculateArea(2, 3);
