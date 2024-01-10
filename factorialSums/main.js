//Given a number, find if the number is equal to the sum of the factorial of its digits.

function strong(n) {
    return n == n.toString().split("").reduce((a,b)=>a+factorial(b),0)?"STRONG!!!!":"Not Strong !!";
  }
  
  function factorial(n){
    let f=1;
    for(let i=1; i<=n; i++){
      f*=i;
    }
    return f;
  }

  console.log(strong(145))//should log 'STRONG!!!!'