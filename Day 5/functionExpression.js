// Task 3 : Function expression to find maximum of two numbers
console.log("Task 3 : Function expression to find maximum of two numbers");
let findMaximum = function (a, b) {
  return a > b ? a : b;
};

let n1 = 10;
let n2 = 20;

console.log(`Maximum of ${n1} and ${n2} is ${findMaximum(n1, n2)}`);

// Task 4 : Function expression to concat two strings
console.log("Task 4 : Function expression to concat two strings");

let concatStrings = function (s1, s2) {
  return String(s1) + String(s2);
};

let s1 = "Software";
let s2 = "Engineer";

console.log(`Concatenation of ${s1} and ${s2} is ${concatStrings(s1, s2)}`);
