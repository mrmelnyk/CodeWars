//Round each number to 2 decimmal places. 
//Only valid numbers are used.

function twoDecimalPlaces(n) {
  return Number(n.toFixed(2));
}

console.log(twoDecimalPlaces(9.574632636))//should log 9.57
console.log(twoDecimalPlaces(4.2367463552))//should log 4.24