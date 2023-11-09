//given a mixed array of strings that represent numbers and numbers, add the numbers and subtract the total of string numbers.

function divCon(x){
    let arr1 = x.filter(a => typeof a == 'string')
    let arr2 = x.filter(b => typeof b == 'number')
    
    return (arr2.reduce((a,b) => a+b,0)) - (arr1.reduce((c,d) => c+(+d),0))
  }

  console.log(divCon([1,2,3,10,'5','7']))//should log 4
  