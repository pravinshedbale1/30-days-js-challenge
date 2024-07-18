let twoDArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log("Logging 2D array");
twoDArray.forEach((arr) => {
  arr.forEach((e) => {
    process.stdout.write(`${e} `);
  });
  console.log();
});

console.log("Loggin element at (2,2) from 2D array");
console.log(twoDArray[2][2]);
