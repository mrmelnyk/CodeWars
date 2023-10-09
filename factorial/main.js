//create a function for determining the factorial of a given number.

function factorial(n){
    if (n == 0){
      return 1;
    } else {
      let num = 1;
      for (let i = n; i > 1; i--){
        num *= i;
      }
      return num;
    }
  }

  console.log(factorial(0))//should log 1
  console.log(factorial(7))//should log 5040
  