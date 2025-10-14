/* IMP: when we use generic and non generic type together then while calling the
function we need to defined the type in a manner but with non generics we don't
*/
// function add(a: number, b: number): number;
// function add(a: string, b: string): string;
// function add(a: any, b: any): any {
//   return a + b;
// }
function add(a, b, c) {
    console.log(typeof a);
    console.log(typeof b);
    console.log(typeof c);
}
var result1 = add(5, "thapa", true); // Output: 15
var result2 = add("Hello, ", 5, false);
var addTwo = function (num1, num2) {
    return num1 + num2;
};
console.log(addTwo(5, 10));
