//? Optional and Default Parameters:

/* TypeScript allows you to define optional and default
parameters in functions. */
/* Optional parameters are denoted by appending a ? symbol
after the parameter name, */
/* and default parameters are specified by providing a
default value in the parameter declaration. */

//! Default Parameter:
const greet = (name: string, id: number): string => {
  return `Welcome, ${name} and ur id is ${id}.`;
};
console.log(greet("Dharmesh", 23));

//! Optional Parameter:
const greet3 = (name: string, id?: number): string => {
  if (id) {
    return `Welcome, ${name}`;
  }
  return `Welcome, ${name} and ur id is ${id}.`;
};
console.log(greet3("Dharmesh"));
console.log(greet3("Dharmesh", 17));
