//Return the count of pairs that have consecutive numbers.

function pairs(arr){
    let count = 0;
    for(let i=0; i<arr.length; i+=2){
     if( Math.abs(arr[i] - arr[i+1]) === 1){
       count++;
     }
    }
    return count;
  }

  console.log(pairs([1,2,4,9,3,4,2,7,8,9]))//should log 3
  