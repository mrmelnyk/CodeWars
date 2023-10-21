//Given a sequence of numbers, find the largest pair sum in the sequence.
function largestPairSum(num){
  let arr = num.sort((a,b) => b-a)
  return arr[0] + arr[1];
}

console.log(largestPairSum([1,4,6,2,1,4,5]))//should log 11
