//Given an array of integers, find the max product from multiplying adjacent numbers in the array.
//The array can contain both zeros and negative numbers.

function adjacentElementsProduct(array) {
    let arr = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < array.length - 1; i++){
      arr = Math.max(arr, array[i] * array[i + 1])
    }
    return arr
  }

  console.log(adjacentElementsProduct([1,2,3,4]))//should log 12 (3*4)
