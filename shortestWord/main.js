//given a string of words, return the length of the shortest word(s).

function findShort(s){
  let arr = s.split(' ').sort((a,b)=>a.length - b.length);
  return arr[0].length;
}

console.log(findShort('Does anyone ever know what to write in these test cases?'))//should log 2