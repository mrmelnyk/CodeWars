//Write a function that returns the largest number you can get by rotating every digit to the left, then every digit except the first, then every digit except the first two, and so on

function maxRot(n) {
    let max = n;
    let arr = n.toString().split('')
    for(let i=0; i<arr.length-1; i++){
      arr.push(arr.splice(i,1));
      let num = +(arr.join(''));
      if(num>max) max = num;
    }
    return max;
  }

  console.log(maxRot(38458215))//should log 85821534
  