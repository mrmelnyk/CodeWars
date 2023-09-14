//You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. 
//If they are, return true. Else, return false.
//You can assume all values in the array are numbers.

function smallEnough(a, limit){
    return a.every(c => c <= limit) ? true:false
  }

  console.log(smallEnough([1,3,5,7,9], 9))//should log true
  console.log(smallEnough([12,23,34,45,56], 49))//should log false
  