"use strict";
/*  Interface
    ---------
    An interface in TypeScript defines the structure (shape) of an object.
    It specifies what properties, methods, and types an object must have */
const user = {
    name: "Shafeeq",
    age: 30,
    salary: 30000,
    getName() {
        console.log(this.name);
    },
};
const employee = {
    name: "Shafeeq",
    position: "Developer",
};
