// Task 1 : Function to check number is even or odd

console.log("Task 1 : Function to check number is even or odd");
function isEven(n) {
  return n % 2 == 0;
}
let num = 10;
if (isEven(num)) {
  console.log("Number is even");
} else {
  console.log("Number is odd");
}

// Task 2 : Function to calculate square of number

console.log("Task 2 : Function to calculate square of number");
function getSquare(n) {
  return n * n;
}
num = 12;
console.log(`Square of ${num} is ${getSquare(num)}`);
