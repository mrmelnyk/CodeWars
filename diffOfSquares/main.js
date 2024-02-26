//Find the difference between the sum of the squares of the first n natural numbers (1 <= n <= 100) and the square of their sum.

function differenceOfSquares(n){
    let sum = 0;
    let sqrd = 0;
    for(let i=1; i<=n;i++){
      sum += i*i;
      sqrd += i;
    }
    return sqrd*sqrd - sum;
  }

  
  console.log(differenceOfSquares(10))//should log 2640
  