"use strict";
// keyof/typeof
// keyof: Gets the keys of an object type as a union of string literals.
// typeof: Gets the type of a value.
// Use Case: keyof is useful for creating type-safe keys of objects, and typeof is useful for capturing the type of an existing variable.
// type statusTypes = "pending" | "completed" | "failed";
// keyof/typeof
const statusTypes = {
    PENDING: "pending",
    COMPLETED: "completed",
    FAILED: "failed",
}; // for creating constant types
function getStatus(message, status) {
    statusTypes.PENDING = "Hello"; // Cannot assign to 'PENDING' because it is a read-only property.
    console.log(message, "==>", statusTypes[status]); // creating value of objects --> Output: 'completed'
    console.log(message, "==>", status); // creating key of objects --> Output: 'COMPLETED'
}
getStatus("123", "PENDING");
