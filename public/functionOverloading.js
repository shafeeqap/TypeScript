"use strict";
// Function Overloading
// ==================== //
// Definition: Declaring multiple function signatures with different parameter types but a single implementation.
function add1(num1, num2) {
    if (typeof num1 === "string" || typeof num2 === "string") {
        return num1 + "" + num2;
    }
    return num1 + num2;
}
console.log("Result is:", add1(10, 20)); // output: 30
console.log("Result is:", add1("10", "20")); // output: 1020
// This is an alternative function to reduce complications of the above function declaration, but it's not good practice to use the type 'any'.
function add2(num1, num2) {
    return num1 + num2;
}
console.log("Result is:", add1(10, 20)); // output: 30
console.log("Result is:", add1("10", "20")); // output: 1020
