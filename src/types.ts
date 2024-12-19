// Type
// Definition: type allows you to create aliases for types, which can be primitive types, unions, or object types.

type details = {
  name: string;
  age: number;
  salary: number;
  getName: () => void;
};
let userDetail: details = {
  name: "Shafeeq",
  age: 30,
  salary: 30_000,
  getName() {
    console.log(this.name);
  },
};

// Type (using & intersection):
type AboutMe = {
  name: string;
};
type Staf = AboutMe & {
  position: string;
};

const staf: Staf = {
  name: "Shafeeq",
  position: "Developer",
};
