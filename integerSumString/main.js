//Write a function that calculates the sum of the integers inside a string. The integers will be mixed amoung other characters.

function integerSum(s){
  return s.replace(/[^0-9]/ig, ' ').split(' ').map(a => +a).reduce((b,c) => b+c);
}

console.log(integerSum('abc3efg5hijk15lmn0pqrs7'))//should log 30
