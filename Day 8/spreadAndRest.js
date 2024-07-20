let oldArr = [1, 2, 3];
let newArr = [...oldArr, 4, 5, 6];
console.log(newArr);

//Rest operator in function
function getSum(...params) {
  return params.reduce((curr, prev) => curr + prev);
}

let ans = getSum(10, 20, 30, 40);
console.log(ans);
