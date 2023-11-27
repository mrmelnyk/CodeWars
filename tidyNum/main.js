//A tidy nunber is one who's digits are in non-decreasing order. given a number, determine if it's a tidy number.

function tidyNumber(n){
    let num = String(n).split('').sort((a,b) => a-b);
    return Number(num.join('')) == n ? true : false;
  }

  console.log(tidyNumber(24589))//should log true
  console.log(tidyNumber(1002))//should log false
  