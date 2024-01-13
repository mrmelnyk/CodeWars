//Given a string, turn each character into its ASCII character code and join them together to create a number and call this number total1.
//Then replace any incidence of the number 7 with the number 1, and call this number total2.
//Then return the difference between the sum of the digits in total1 and total2.

function calc(x){
    let total1 = x.split('').map(a => a.charCodeAt(0));
    let total2 = total1.map(a => Number(a.toString().replace(/7/g,'1')));
    return total1.reduce((a,b) => +a + +b) - total2.reduce((a,b) => +a + +b);
  }

  console.log(calc('abcdef'))//should log 6
