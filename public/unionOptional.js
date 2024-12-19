"use strict";
// Union/Optional\
// Union: A variable can have multiple possible types.
// Optional: Denoted by a ?, it indicates that a property or parameter is optional.
let aboutUser = {
    name: "Shafeeq",
    age: "30", // age as string
    salary: 30000,
    getName() {
        console.log(this.name);
    },
};
let skills = ["JS", "CSS", "TS", 10, 25, 30, false]; // multiple types
// Union
let value;
value = 'Hello';
value = 42;
// Optional
function greet(name) {
    console.log(`Hello, ${name !== null && name !== void 0 ? name : 'Guest'}`);
}
greet('Alice');
greet(); // Logs: Hello, Guest
