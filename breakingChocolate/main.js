function breakChocolate(n,m) {
    if (n>=1 && m>=1) {
      return n*m-1
    } else if (n==1 && m==1){
      return 0
    } else {
      return 0
    }
  }

  console.log(breakChocolate(5,5))//should log 24
  console.log(breakChocolate(1,1))//should log 0
  console.log(breakChocolate(5,1))//should log 4
  console.log(breakChocolate(2,8))//should log 15