let arr = [10, 32, 22, 12, 11, 28, 3, 7, 17, 18];

console.log("Iterating array using for loop");
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

console.log("Iterating array using for-each loop");
arr.forEach((e) => {
  console.log(e);
});
