//Create a method that takes an array/list as an input, and outputs the index at which the sole odd number is located.

//This method should work with arrays with negative numbers. If there are no odd numbers in the array, then the method should output -1.

function oddOne(arr) { 
    for(let i=0; i<arr.length; i++){
      if(Math.abs(arr[i])%2 == 1){
        return i;
      }
    }
    return -1
  }

  console.log(oddOne([2,4,6,7,8,10]))//should log 3
  