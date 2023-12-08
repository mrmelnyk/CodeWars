//Write a function that squares every digit of a given number and concatenates them back into one number.

function squareDigits(num){
    return Number(num.toString().split('').map(a => a**2).join(''));
  }

  console.log(squareDigits(3212))//should log 9414
  