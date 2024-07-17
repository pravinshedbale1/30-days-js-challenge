// Task 9 : Call function n times
console.log("Task 7 : Call function n time");

function caller(fn, n) {
  for (let i = 1; i <= n; i++) {
    fn(i);
  }
}

let n = 5;
let fn = function (i) {
  console.log(`Function called ${i} times`);
};
caller(fn, n);

// Task 10 : Two higher order functions
console.log("Task 8 : Two higher order functions");

function perform(fn1, fn2, val) {
  let res = fn1(val);
  return fn2(res);
}

let squareNumber = function (val) {
  return val * val;
};

let multiplyBy5 = function (val) {
  return val * 5;
};
let val = 5;
console.log(
  `If we square ${val} and multiply it by 5 then we get ${perform(
    squareNumber,
    multiplyBy5,
    val
  )}`
);
