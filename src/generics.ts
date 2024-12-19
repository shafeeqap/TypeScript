// Generics

// Definition: Generics allow you to write functions, interfaces, and classes that work with any type while still enforcing type safety.

// # Method: 1.
function getAge<T>(age: T): T {
  return age;
}

console.log(getAge<number>(20));
console.log(getAge<string>("20"));
// -------------------------------------------------------------------------- //

// # Method: 2.
type userType = {
  name: string;
  age: number;
};

type adminType = {
  firstName: string;
  role: string;
};

const userDetails: userType = {
  name: "Shafeeq",
  age: 30,
};

const adminDetails: adminType = {
  firstName: "Shafeeq",
  role: "admin",
};

function getDetails<T>(details: T): T {
  return details;
}

const userValue = getDetails<userType>(userDetails);
console.log(userValue.age);

const adminValue = getDetails<adminType>(adminDetails);
console.log(adminValue.firstName);
// -------------------------------------------------------------------------- //

// # Method: 2. (campaigning two types)

// User Type.
type UserType = {
  name: string;
  age: number;
};
// User Type merges in Admin Type.
type AdminType = UserType & {
  role: string;
};

const AdminDetails: AdminType = {
  name: "Shafeeq",
  age: 30,
  role: "admin",
};

function getAdminDetails<T>(details: T): T {
  return details;
}

const res = getAdminDetails<AdminType>(AdminDetails);
console.log(res);
// -------------------------------------------------------------------------- //





// # Method: 3. (campaigning two interfaces)

interface userDetails {
  name: string;
  age: number;
}

// extends two interfaces
interface adminDetails extends UserType {
  role: string;
}
