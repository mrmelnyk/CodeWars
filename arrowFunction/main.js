//Complete the function using arrow functions so it will convert the numbers of an array to character in a string.

function arrowFunc(arr){
  return arr.map(a => String.fromCharCode(a)).join('');
}

console.log(arrowFunc([84,101,115,116]))//should log 'Test'
