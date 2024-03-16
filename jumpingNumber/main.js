//Write a function that determines whether a number is jumping (all adjacent digits differ by 1) or not.

function jumpingNum(n){
  let arr = n.toString().split('');
  
  for(let i=0; i<arr.length-1; i++){
    if(Math.abs(arr[i] - arr[i+1]) !== 1) return 'Not!!';
  }
  return 'Jumping!!';
}

console.log(jumpingNum(34545676))//should log 'Jumping!!'
