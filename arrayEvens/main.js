//given an array and a number, return the last 'number' of even numbers in the array.

function evenNumbers(array, number){
  let arr = [];
  for(let i = 0; i < array.length; i++){
    array[i] % 2 == 0 ? arr.push(array[i]) : [];
  }
  return arr.slice(-number);
}

console.log(evenNumbers([1,2,3,4,5,6,7,8], 3))//should log [4,6,8]
