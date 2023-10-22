//Using the given function and .filter method, return an array of only odd numbers.

function odds(values){
  return values.filter(a => a%2!=0);
}

console.log(odds([1,2,3,4,5,6]))//should log [1,3,5]
