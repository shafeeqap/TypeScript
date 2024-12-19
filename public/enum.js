"use strict";
// Enum
// Enum: Defines a set of named constants.
// as const: Converts an object or array to a readonly type.
// type StatusType = "pending" | "completed" | "failed";
var statusType;
(function (statusType) {
    statusType[statusType["PENDING"] = 0] = "PENDING";
    statusType[statusType["COMPLETED"] = 1] = "COMPLETED";
    statusType[statusType["FAILED"] = 2] = "FAILED";
})(statusType || (statusType = {}));
function getStatus(message, status) {
    console.log(message, "==>", status);
}
getStatus("123", statusType.COMPLETED);
// as const
const colors = ["red", "green", "blue"];
colors = "yellow"; // Cannot assign to 'colors' because it is a constant.
