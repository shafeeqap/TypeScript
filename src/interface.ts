/*  Interface
    --------- 
    An interface in TypeScript defines the structure (shape) of an object. 
    It specifies what properties, methods, and types an object must have */

interface User {
  name: string;
  age: number;
  salary: number;
  email?: string; // Optional property
  getName: () => void;
}

const user: User = {
  name: "Shafeeq",
  age: 30,
  salary: 30_000,
  getName() {
    console.log(this.name);
  },
};

// Use Case: Used to define the shape of objects, often for objects or classes, and is also useful for type-checking in function parameters.

// Interface (using extends):
interface Person {
  name: string;
}

interface Employee extends Person {
  position: string;
}

const employee: Employee = {
  name: "Shafeeq",
  position: "Developer",
};
