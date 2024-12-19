// Named Types (We can create the type ourselves.)

// Definition: Named types are type aliases or interfaces that give a name to a particular structure or union.
// Use Case: Used to make the code cleaner and more reusable by giving meaningful names to complex types.

type StatusType = "pending" | "completed" | "failed" | "";

let currentStatus: StatusType = "";

// from API
const response = "pending";
if (response === "pending") {
  currentStatus = "pending";
}
