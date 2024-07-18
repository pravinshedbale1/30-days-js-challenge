let arr = [10, 32, 22, 12, 11, 28, 3, 7, 17, 18];
console.log("Original array : ", arr);

let arrDouble = arr.map((el) => el * 2);
console.log("Array after doubling each element using map : ", arrDouble);

let filteredEven = arr.filter((el) => el % 2 == 0);
console.log(
  "Array after filtering it to get only even numbers: ",
  filteredEven
);

let sum = arr.reduce((prev, curr) => prev + curr);
console.log("Sum of all elements from array using reduce : ", sum);
