//Complete the function that returns an array of length n, starting with the given number x and the squares of the previous number. 
//If n is negative or zero, return an empty array/list.

function squares(x, n) {
    let arr =[];
    for(let i=1; i<=n; i++){
      arr.push(x);
      x*=x;
    }
    return arr;
  }

  console.log(squares(2, 4))//should log [2,4,16,256]
  