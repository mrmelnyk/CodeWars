/*
Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.

Square all numbers k (0 <= k <= n) between 0 and n.

Count the numbers of digits d used in the writing of all the k**2.

Implement the function taking n and d as parameters and returning this count.
*/

function nbDig(n, d) {
    let k = [];
    let count = 0;
    for(let i=0; i<=n; i++){
      k.push(i**2);
    }
    let arr = k.join('').split('');
    arr.map(a => +a === d ? count++ : count)
    return count
  }

  console.log(nbDig(11011, 2))//should log 9481
  