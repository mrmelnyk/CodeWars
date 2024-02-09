//Given a number, determine if it is special. A special number has all of its individual digits between 0 and 5.

function specialNum(n){
  let arr = n.toString().split('');
  let ans = arr.map(a => +a < 6 ? 0 : 1);
  return ans.reduce((a,b) => a+b) > 0 ? 'NOT!!' : 'Special!!';
}

console.log(specialNum(72))//should log 'NOT!!'
console.log(specialNum(234115))//should log 'Special!!'
