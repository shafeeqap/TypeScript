// Union/Optional\
// Union: A variable can have multiple possible types.
// Optional: Denoted by a ?, it indicates that a property or parameter is optional.

type About = {
    name: string;
    age: number | string; // union
    salary?: number; // '?' optional (like optional chaining in JS)
    getName?: () => void;
  };
  let aboutUser: About = {
    name: "Shafeeq",
    age: "30", // age as string
    salary: 30_000,
    getName() {
      console.log(this.name);
    },
  };
  let skills: (string | number | boolean)[] = ["JS", "CSS", "TS", 10, 25, 30, false]; // multiple types
  
// Union
let value: string | number;
value = 'Hello';
value = 42;

// Optional
function greet(name?: string) {
  console.log(`Hello, ${name ?? 'Guest'}`);
}

greet('Alice');
greet(); // Logs: Hello, Guest
