//You have a sum of money that you want to invest and you want to know how many years it will take to earn enough interest to reach a desired amount. Tax will be applied to annual interest earned.

function calcYears(principle, interest, tax, desired){
  let years = 0;
  while (principle < desired){
    principle = principle + (principle * interest) - ((principle * interest) * tax);
    years++;
  }
  return years;
}

console.log(calcYears(1000, 0.05, 0.18, 1100))//should log 3
