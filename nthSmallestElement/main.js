//Given an array of integers, find the Nth smallest element in the array.
//Array size will be at least 3; Array number could be a mixture of positive, negative, and zeros; Array numbers could repeat, so don't remove duplicates.

function nthSmallest(arr, pos){
    let sorted = arr.sort((a,b) => a-b);
    return sorted[pos - 1];
  }

  console.log(nthSmallest([5,3,12,1,6,24], 3))//should log 5
  