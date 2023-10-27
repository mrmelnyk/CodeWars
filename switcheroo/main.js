//Given a string of a's, b's and c's switch the position of the a's and b's, but leave the position of the c's where they are.

function switcheroo(x){
  return x.replace(/[ab]/g, q => q == 'a' ? 'b':'a');
}

console.log(switcheroo('aacbb'))//should log 'bbcaa'
