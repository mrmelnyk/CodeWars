//Find the sum of the odd numbers within an array, after cubing the intial integers. The function should return undefined if any of the values aren't numbers.

function cubeOdd(arr){
  let odd = [];
  for(let i=0; i<arr.length; i++){
    if(arr[i]%2!=0){
      odd.push(arr[i]);
    }
  }
  let ans = odd.map(a => a**3).reduce((b,c) => b+c);
  return ans === Number(ans) ? ans : undefined;
}

console.log(cubeOdd([1,2,3,4]))//should return 28
