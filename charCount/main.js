//Count all the occurences of a character within a string and return the count as an object.

function count(str){
  return str.split('').reduce((a,b) => {
    a[b] = (a[b] || 0) + 1;
    return a;
  })
}

console.log(count('abbc'))//should log {'a': 1, 'b': 2, 'c': 1}
