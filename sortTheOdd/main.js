//Given an array of numbers, sort the odd in ascending order while leaving the even in their original position.

function sortOdd(arr){
  let indices = [];
  arr.filter((v,i) => v % 2 && indices.push(i)).sort((a,b) => a-b).forEach((v,i) => arr[indices[i]] = v);
  return arr;
}

console.log(sortOdd([5,3,2,8,1,4]))//should log [1,3,2,8,5,4]
