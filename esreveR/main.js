//write a function that reverses a list, but doesn't make use of the built-ins (.reversee()).

function reverse(array){
  let ans = [];
  while(array.length){
    ans.push(array.pop());
  }
  return ans;
}

console.log(reverse([1,2,3]))//should log [3,2,1]
