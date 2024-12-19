// Enum

// Enum: Defines a set of named constants.
// as const: Converts an object or array to a readonly type.

// type StatusType = "pending" | "completed" | "failed";

enum statusType {
  PENDING,
  COMPLETED,
  FAILED,
}

function getStatus(message: string, status: statusType) {
  console.log(message, "==>", status);
}

getStatus("123", statusType.COMPLETED);

// as const
const colors = ["red", "green", "blue"] as const;
colors = "yellow"; // Cannot assign to 'colors' because it is a constant.

