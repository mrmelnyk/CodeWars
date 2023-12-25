//Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).
//Only positive integers will be passed to the function (> 0 ), no negatives or zeros.

function minValue(values){
    return Number(values.sort((a,b) => a-b).filter((c,d) => values.indexOf(c) === d).join(''))
  }

  console.log(minValue([5,1,6,3,1,5]))//should log 1356
  