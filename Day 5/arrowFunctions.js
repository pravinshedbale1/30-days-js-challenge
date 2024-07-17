// Task 5 : Arrow function to calculate sum of two numbers
console.log("Task 5 : Arrow function to calculate sum of two numbers");
let calculateSum = (a, b) => a + b;

let n1 = 10;
let n2 = 20;

console.log(`Sum of ${n1} and ${n2} is ${calculateSum(n1, n2)}`);

// Task 6 : Arrow function to check if string contain specific character
console.log(
  "Task 6 : Arrow function to check if string contain specific character"
);
let checkChar = (str, char) => String(str).includes(char);

let string = "Pravin";
let char = "P";

console.log(
  `Does string ${string} contains character '${char}' : ${checkChar(
    string,
    char
  )}`
);
