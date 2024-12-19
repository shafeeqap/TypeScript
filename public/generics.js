"use strict";
// Generics
// Definition: Generics allow you to write functions, interfaces, and classes that work with any type while still enforcing type safety.
// # Method: 1.
function getAge(age) {
    return age;
}
console.log(getAge(20));
console.log(getAge("20"));
const userDetails = {
    name: "Shafeeq",
    age: 30,
};
const adminDetails = {
    firstName: "Shafeeq",
    role: "admin",
};
function getDetails(details) {
    return details;
}
const userValue = getDetails(userDetails);
console.log(userValue.age);
const adminValue = getDetails(adminDetails);
console.log(adminValue.firstName);
const AdminDetails = {
    name: "Shafeeq",
    age: 30,
    role: "admin",
};
function getAdminDetails(details) {
    return details;
}
const res = getAdminDetails(AdminDetails);
console.log(res);
