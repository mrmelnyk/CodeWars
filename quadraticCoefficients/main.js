//Find the coefficients of the quadratic equation of the guven two roots.

function quadratic(x1, x2){
  return [1, -(x2 + x1), (x1 * x2)];
}

console.log(quadratic(-4,-9))//should log [1,13,36]
