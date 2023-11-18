//given the content of the evaporator, the rate of evaporation, and the threshold beyong which evaporation is no longer possible, calculate how many days the evaporator will last.

function evaporator(cont, evap, thr){
  let day = 0,
      gas = 100;
  while(gas >= thr){
    gas-=gas*evap/100;
    day++;
  }
  return day;
}

console.log(evaporator(10,10,10))//should log 22
