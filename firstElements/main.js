//given an array, write a function to select the first (n) elements of that array. If only the array is given, return the first element. If n is 0 return an empty array.

function first(arr, n){
  if(n>1){
    return arr.slice(0,n);
  }else if(n==0){
    return [];
  }else{
    return [arr[0]];
  }
}

console.log(first(['a','b','c','d','e'], 3))//should log ['a','b','c']
