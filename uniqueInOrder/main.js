//Write a function that takes a sequence and returns a list of items that do not have any elements with the same value next to each other and all in the same order as the original sequence.

function unique(iterable){
  iterable = Array.from(iterable);
  let arr = [];
  for(let i=0; i<iterable.length; i++){
    if(iterable[i] != iterable[i+1]) arr.push(iterable[i]);
  }
  return arr;
}

console.log(unique('AABBCDEeFFFAA'))//should log ['A','B','C','D','E','e','F','A']
