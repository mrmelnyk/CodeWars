//Find the sum of all multiples of n below m.
//n and m are natural numbers (positive integers).
//m is excluded from the multiples.

function sumMul(n,m){
    let sum = 0;
    if(m<=0) return 'INVALID';
    for(let i=1;i*n<m;i++){
      sum += i*n;
    }
    return sum;
  }

  console.log(sumMul(2,9))//should log 20
  console.log(sumMul(4, -20))//should log 'INVALID'