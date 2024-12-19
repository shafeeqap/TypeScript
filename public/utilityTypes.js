"use strict";
// Utility Types
// Definition: Built-in TypeScript types that help manipulate existing types.
// We can use the 'Utility Types' alternative of 'read only' to assign each type.
const usersDetails = {
    name: "Shafeeq",
    age: 30,
};
usersDetails.name = "Rushdan"; // ❌ Error: Cannot assign to 'name' because it is a read-only property.
const usersDetail = {
    name: "Shafeeq",
    age: 30,
};
usersDetail.name = "Muhammed"; // ❌ Error: Cannot assign to 'name' because it is a read-only property. (Readonly)
// 2: Partial<T> Makes all properties of T optional.
const a = {
    name: "Shafeeq", // Only `name` is provided, `age` is optional
};
const b = { id: 1, name: "John" }; // Now both `id` and `name` are required
const userSummary = { id: 1, name: "John" }; // Only `id` and `name` are allowed
const userWithoutAge = { id: 1, name: "John" }; // `age` is omitted
const Status = "completed"; // 'failed' is excluded.
const food = {
    PIZZA: "pizza",
    KFC: "kfc",
    CHICKEN: "chicken",
};
const food1 = {
    PIZZA: "pizza",
    KFC: "kfc",
    CHICKEN: "chicken",
};
