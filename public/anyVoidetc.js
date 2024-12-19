"use strict";
// any/unknown/nver/void/null
// =========================
// 1️⃣ any
// ------
/*
    Definition: The any type allows a variable to hold any type of value.
    Usage: Use it when you don't know the type of data that will be assigned.
*/
let data;
data = 42; // number
data = "Hello"; // string
data = true; // boolean
data = [1, 2, 3]; // array
// Drawback: It disables TypeScript's type-checking, which may lead to runtime errors.
// 2️⃣ unknown
// -----------
// Definition: The unknown type represents a value that could be of any type, but it requires type checking before use.
// Usage: It is safer than any because you must check its type before using it.
let userFirstName = "Shafeeq";
const newValue = userFirstName;
newValue.toUpperCase();
// OR
let value;
value = 42;
value = "Hello";
value = true;
if (typeof value === "string") {
    console.log(value.toUpperCase()); // TypeScript knows it's a string here
}
/*
⏺️ When to use:

⭕ When you know a value may come from a dynamic source, such as API responses.
⭕ When you want to ensure type-safety through type guards (like typeof or instanceof).

⏺️ Difference from any:

⭕ Unlike any, you must check the type before using it.
⭕ It enforces type safety and is recommended over any.

*/
// 3️⃣ nver
// -------
/*
    Definition: The never type represents values that never occur. It signifies that a function will never return (like throwing an error or running an infinite loop).
    Usage: Used for functions that always throw errors or have infinite loops.
*/
function throwError(message) {
    throw new Error(message);
}
function infiniteLoop() {
    while (true) {
        console.log("Running forever...");
    }
}
// 4️⃣ void
// -------
/*
    Definition: The void type represents a value that is undefined or no value. It is used to annotate functions that do not return anything.
    Usage: Used as the return type for functions that do not return anything.
*/
function logMessage(message) {
    console.log(message);
}
// 5️⃣ null
// --------
/*
    Definition: The null type represents a null value, often used in conjunction with union types (like string | null).
    Usage: Used to denote that a variable can have a null value.
  */
let UserName = null;
function get() {
    if (UserName) {
        return UserName;
    }
    else if (UserName === null) {
        return "null";
    }
}
