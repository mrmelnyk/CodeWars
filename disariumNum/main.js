//Disarium number is the number that The sum of its digits powered with their respective positions is equal to the number itself.
//Given a number, Find if it is Disarium or not.

function disariumNumber(n){
    let ans = [];
    let arr = n.toString().split('');
    for(let i=0; i<arr.length; i++){
      ans.push(arr[i]**(i+1));
    }
    return ans.reduce((a,b) => a+b) == n ? 'Disarium !!' : 'Not !!';
  }

  console.log(disariumNumber(89))//should log 'Disarium !!'
  console.log(disariumNumber(1024))//should log 'Not !!'
  