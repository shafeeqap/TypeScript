// Infer types (Implicit Types)

// let userName = "Shafeeq";
// userName=30
// let subscribers = 30_000;
//------------------------------------------//

// Defining Types (Explicit Types)

// let userName: string = "Shafeeq";
// let subscribers: number = 30_000;
// let isSubscribed: boolean = true; //boolean
// let skills: string[] = ["JS", "CSS", "TS"]; // array of strings
// let count: number[] = [1, 2, 3, 4, 5];
// let emptyArray: [] = [];
// let userDetail: { name: string; age: number; salary: number } = {
//   name: "Shafeeq",
//   age: 30,
//   salary: 30_000,
// };
//------------------------------------------//

/*  Interface
    --------- 
    An interface in TypeScript defines the structure (shape) of an object. 
    It specifies what properties, methods, and types an object must have */

// interface Details {
//   name: string;
//   age: number;
//   salary: number;
//   getName: () => void;
// }

// let userDetail: Details = {
//   name: "Shafeeq",
//   age: 30,
//   salary: 30_000,
//   getName() {
//     console.log(this.name);
//   },
// };
//------------------------------------------//

// Type
// type Details = {
//   name: string;
//   age: number;
//   salary: number;
//   getName: () => void;
// };
// let userDetail: Details = {
//   name: "Shafeeq",
//   age: 30,
//   salary: 30_000,
//   getName() {
//     console.log(this.name);
//   },
// };
//------------------------------------------//

// Union/Optional
// type Details = {
//   name: string;
//   age: number | string;
//   salary?: number; // '?' optional (like optional chaining in JS)
//   getName?: () => void;
// };
// let userDetail: Details = {
//   name: "Shafeeq",
//   age: "30", // age as string
//   salary: 30_000,
//   getName() {
//     console.log(this.name);
//   },
// };
// let skills: (string | number | boolean)[] = ["JS", "CSS", "TS", 10, 25, 30, false]; // multiple types
//------------------------------------------//

// Funcions
// type Information = {
//   name: string;
//   age: number | string;
//   salary?: number; // '?' optional (like optional chaining in JS)
//   getName?: () => void;
// };
// const userInformation: Details = {
//   name: "Shafeeq",
//   age: "30", // age as string
//   salary: 30_000,
//   getName() {
//     console.log(this.name);
//   },
// };

// function getUserName(userInformation: Details) {
//   return userInformation.name;
// }

// getUserName(userInformation);

// function getUser(userDetail: Details): string {
//   return userDetail.name;
// }

// const newValue = getUser(userDetail);
// newValue.length;
//------------------------------------------//

// Named Types
// type StatusType = "pending" | "completed" | "failed" | "";

// let currentStatus: StatusType = "";

// // from API
// const response = "pending";
// if (response === "pending") {
//   currentStatus = "pending";
// }
