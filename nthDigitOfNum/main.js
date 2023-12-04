//Complete the function that takes two numbers as input, num and nth and return the nth digit of num (counting from right to left).
//If num is negative, ignore its sign and treat it as a positive value
//If nth is not positive, return -1
//Keep in mind that 42 = 00042. This means that findDigit(42, 5) would return 0

function findDigit(num, nth){
    if(nth <= 0) return -1;
    let n = String(Math.abs(num)).split('');
    if(n.length < nth) return 0;
      for(let i=0; i<n.length; i++){
       return Number(n[n.length - nth]);
    }
  }

  console.log(findDigit(12345, 4))//should log 2
  console.log(findDigit(987, 6))//should log 0
  