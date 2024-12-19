// Function Overloading
// ==================== //
// Definition: Declaring multiple function signatures with different parameter types but a single implementation.

function add1(num1: number | string, num2: number | string): number | string {
  if (typeof num1 === "string" || typeof num2 === "string") {
    return num1 + "" + num2;
  }
  return num1 + num2;
}

console.log("Result is:", add1(10, 20)); // output: 30
console.log("Result is:", add1("10", "20")); // output: 1020




// Using function overloading concept
function add2(num1:number, num2:number): number;
function add2(num1: string, num2: string): string;

// This is an alternative function to reduce complications of the above function declaration, but it's not good practice to use the type 'any'.
function add2(num1: any, num2: any): any {
  return num1 + num2;
}

console.log("Result is:", add1(10, 20)); // output: 30
console.log("Result is:", add1("10", "20")); // output: 1020
