//Remove all of the odd numbers from a given array.

function noOdds(val){
  return val.filter(a => a%2 == 0);
}

console.log(noOdds([0,1,2,3]))//should log [0,2]
