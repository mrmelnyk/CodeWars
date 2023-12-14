//Write a function that tells you if the binary representation of a number (n) is Evil (even) or Odious (odd). 

function evil(n){
  let num = n.toString(2).split('').map(a => +a).reduce((a,b) => a+b);
  return num%2 == 0 ? "It's Evil!":"It's Odious!";
}

console.log(evil(3))//should log "It's Evil!"
