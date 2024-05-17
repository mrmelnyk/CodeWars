//Write a function to find if a number is lucky or not. If the sum of all digits is 0 or multiple of 9 then the number is lucky.

function isLucky(n) {
    let num = n.toString().split().map(a => +a);
    let sum = num.reduce((b,c) => b+c);
    return sum == 0 || sum%9 == 0;
  }

  console.log(isLucky(22869))//should log true
  