//Decipher the secret message. The second letter and the last letter have been switched, and the first letter is replaced by its character code.

function decipherThis(str){
  let arr = str.replace(/[\d+]/g, a => String.fromCharCode(a).split(' '));
  return arr.map(a => a.length>2 ? a.slice(0,1) + a.slice(-1) + a.slice(2,-1) + a.slice(1,2) : a).join(' ');
}

console.log(decipherThis('82yade 115te 103o'))//should log 'Ready set go'
