//Write a function that multiplies each number by 5 raised to the number of digits in each numbers.

function multiply(num){
    return num * (5**Math.abs(num).toString().length);
  }

  console.log(multiply(5))//should log 25
  console.log(multiply(200))//should log 25000
  