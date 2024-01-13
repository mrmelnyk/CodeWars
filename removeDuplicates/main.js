//Remove the duplicates for an array of integers, keeping the last (right-most) occurence of each element.

function solve(arr){
  return arr.reverse().filter((a,b) => arr.indexOf(a) == b).reverse();
}

console.log(solve([1,3,2,3,6,4,5,6]))//should log [1,2,3,4,5,6]
