"use strict";
// Funcions
// Definition: Functions have types for their parameters and return values.
// Object
const UserInformation = {
    name: "Shafeeq",
    age: 30,
    salary: 30000,
    getName() {
        console.log('Name:', this.name);
    },
};
// # Method 1:===========================================//
// Function--> passing 'UserInformation' as a parameter and defined type to the function.
function getUserName(UserInformation) {
    return UserInformation.name;
}
// function calling
const userName = getUserName(UserInformation);
console.log(userName);
// # Method 2:===========================================//
function getUser(UserInformation) {
    return UserInformation.age;
}
const age = getUser(UserInformation);
console.log(age); // Output: 30
console.log(age.toString()); // Output: "30"
// # Method 3:===========================================//
// function declaration and define types as inline
function add({ a, b }) {
    return a + b;
}
const result = add({ a: 10, b: 30 }); // argument passing as an object.
console.log(result); // Output: 40
// # Method 4:===========================================//
function display(UserInformation) {
    var _a;
    (_a = UserInformation.getName) === null || _a === void 0 ? void 0 : _a.call(UserInformation);
}
display(UserInformation);
