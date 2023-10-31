//Given two sorted arrays, merge them into one array, sorted in ascending order, with any duplicates removed.

function mergeArrays(arr1, arr2){
  let arr = arr1.concat(arr2.filter((a) => arr1.indexOf(a) < 0))
  return arr.sort((a,b) => a-b)
}

console.log(mergeArrays([1,2,3,4,5], [5,6,7,8]))//should log [1,2,3,4,5,6,7,8]
