//Determine if the given array is in ascending order.

function inAscOrder(arr) {
    return arr.map((a,b) => a > arr[b+1]).indexOf(true) === -1;
  }
  
  console.log(inAscOrder([1,2,3,4,5,6]))//should log true
  