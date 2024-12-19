// Funcions
// Definition: Functions have types for their parameters and return values.

// Types
type Informations = {
    name: string;
    age: number | string;
    salary?: number; 
    getName?: () => void;
  };

  // Object
  const UserInformation: Informations = {
    name: "Shafeeq",
    age: 30,
    salary: 30_000,
    getName() {
      console.log('Name:',this.name);
    },
  };
  

// # Method 1:===========================================//
  // Function--> passing 'UserInformation' as a parameter and defined type to the function.
  function getUserName(UserInformation: Informations) {
    return UserInformation.name;
  }
  
  // function calling
  const userName = getUserName(UserInformation);
  console.log(userName);
  



// # Method 2:===========================================//
function getUser(UserInformation: Informations): number|string { // The type (eg:number|string) written outside of the function is type of the return
    return UserInformation.age;
}
  
const age = getUser(UserInformation);
console.log(age); // Output: 30
console.log(age.toString()); // Output: "30"




// # Method 3:===========================================//
// function declaration and define types as inline
function add({a, b}: {a:number; b:number}){
    return a + b;
  }

const result = add({a:10, b:30}) // argument passing as an object.
console.log(result); // Output: 40



// # Method 4:===========================================//
function display(UserInformation:Informations): void { // (eg: void) Nothing is returned.
    UserInformation.getName?.()
}

display(UserInformation)