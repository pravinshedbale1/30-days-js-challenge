// Task 7
console.log("Task 7 : Print pattern");
let size = 5;
for (let i = 1; i <= size; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write("* ");
  }
  console.log();
}
