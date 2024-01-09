//Given an array of Boolean values and a logical operator, return a Boolean result based on sequentially applying the operator to the values in the array.

function logicalCalc(arr, op){
    if(op === 'AND') return arr.every(b => b);
    else if(op === 'OR') return arr.some(b => b);
    else return !!arr.reduce((a,b) => a ^ b);
  }

  console.log(logicalCalc([true, true, true, false], 'OR'))//should log true
  console.log(logicalCalc([true, true, true, false], 'AND'))//should log false
  