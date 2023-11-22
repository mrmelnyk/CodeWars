//return a new array consisting of elements which are multiples of their own index in the input array.

function multipleOfIndex(arr){
  let arr2 = [];
  for(let i=0; i<arr.length; i++){
    if(arr[i]%i == 0 || arr[i] == 0){
      arr2.push(arr[i]);
    }
  }
  return arr2;
}

console.log(multipleOfIndex([0,2,3,6,9]))//should log [0,2,6]
