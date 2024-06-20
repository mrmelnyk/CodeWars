/*
Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product.
Array/list will contain positives only 
Array/list will always have even size
*/

function minSum(arr) {
    let sum = 0;
    let srt = arr.sort((a,b) => a-b);
    for(let i=0; i<srt.length/2; i++){
      sum += srt[i] * srt[srt.length - i - 1];
    }
    return sum;
  }

  console.log(minSum([5,4,2,3]))//should log 22
  