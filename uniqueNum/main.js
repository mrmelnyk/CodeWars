//You are given an array with one unique number in it, find the unique number.
//The array will have at least 3 numbers in it.

function findUniq(arr){
  arr = arr.sort((a,b) => a-b);
  return arr[0] != arr[1] ? arr[0] : arr[arr.length - 1];
}

console.log(findUniq([1,1,1,2,1,1,1]))//should log 2
console.log(findUniq([4,5,5,5,5]))//should log 4
