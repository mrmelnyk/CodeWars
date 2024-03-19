//Given a nested array, you must find and collect all the dog poop (@) in your yard.
//You will also be given a number of bags and how much each bag can hold.
//If the dog (D) is in the yard, return 'Dog!!'.
//If you are able to clean up all the poop, return 'Clean', otherwise return 'Cr@p'.

function crap(x,bags,cap){
  let str = x.flat().join('');
  str = str.replace(/[_]/ig,  '');
  
  if(str.includes('D') === true) return 'Dog!!';
  if(str.length <= (bags*cap)) return 'Clean';
  return 'Cr@p';
}

console.log(crap([['_','_','_'],['_','@','_'],['_','@','_']], 2, 2))//should log 'Clean'
