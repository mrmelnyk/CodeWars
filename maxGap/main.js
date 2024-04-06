//Write a function that finds the maximum difference between successive elements of an array in its sorted form.

function maxGap(numbers){
  let gap = 0;
  let arr = numbers.sort((a,b) => b-a);
  for(let i=0; i<arr.length; i++){
    let num = Math.abs(arr[i] - arr[i+1]);
    if(num > gap) gap = num;
  }
  return gap;
}

console.log(maxGap([13,10,2,9,5]))//should log 4
