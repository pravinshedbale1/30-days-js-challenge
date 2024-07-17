// Task 7 : Function to get product of two numbers
console.log("Task 7 : Function to get product of two numbers");
function getProduct(a, b = 1) {
  return a * b;
}

let a = 10;
let b = 20;

console.log(`Product of ${a} and ${b} is ${getProduct(a, b)}`);
console.log(`Product of ${a} and default param(1) is ${getProduct(a)}`);

// Task 8 : Function to return greeting message
console.log("Task 8 : Function to return greeting message");
function greet(name, age = 18) {
  return `Hi ${name}, congrats on turning ${age} yr old`;
}
let name = "Pravin";
console.log(`Greeting from function is : ${greet(name)}`);
