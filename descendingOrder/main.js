//Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. 
//Essentially, rearrange the digits to create the highest possible number.

function descendingOrder(n){
    let str = n.toString()
    let arr = str.split('')
    return Number(arr.sort((a,b) => b-a).join(''))
  }

  console.log(descendingOrder(2468))//should log 8642
  console.log(descendingOrder(448382727))//should log 887744322
  