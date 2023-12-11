//Write a function that takes a positive integer n, sums all the cubed values from 1 to n (inclusive), and returns that sum.
//Assume that the input n will always be a positive integer.

function sumCubes(n){
    let arr = [];
    for(let i=1; i<=n; i++){
      arr.push(i);
    }
    return arr.map(a => a**3).reduce((a,b) => a+b);
  }

  console.log(sumCubes(4))//should log 100
  