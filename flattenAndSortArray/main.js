//Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

function flattenAndSort(array) {
    return array.flat(1).sort((a,b) => a-b)
  }

  console.log(flattenAndSort([3,2,1],[100, 101,102], [50,60,70]))//should log [1,2,3,50,60,70,100,101,102]