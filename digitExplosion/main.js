//Given a string made of digits [0-9], return a string where each digit is repeated a number of times equal to its value.

function explode(s){
  return s.split('').map(a => a == '0' ? '' : +a.repeat(a)).join('');
}

console.log(explode('3014'))//should log '33314444'
