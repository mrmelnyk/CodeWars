//Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.

function isDivisible(n, x, y) {
    return n % x == 0 && n % y == 0 
  }

  console.log(isDivisible(12, 3, 4))//should log true
  console.log(isDivisible(10, 2, 5))//should log true
  console.log(isDivisible(14, 3, 7))//should log false