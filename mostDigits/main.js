//Given an array, fond the number with the most digits. 
//If two numbers have the same amount of digits, return the first one in the array.

function findLongest(arr) {
  return arr.reduce((a,b) => (String(a).length) < (String(b).length) ? b : a);
}

console.log(findLongest([1,20, 300, 4000]))//should log 4000
console.log(findLongest([5, 50, 500, 400, 300]))//should log 500
