//Given a string return another string that has the odd and even indexes of the orginal string have been sorted and a space is placed in between. 0 is considered an even index.

function oddEvenSort(s){
  let even = [],
      odd = [];
  let arr = s.split('');
  for(let i = 0; i < arr.length; i++){
    i%2 == 0 ? even.push(arr[i]) : odd.push(arr[i]);
  }
  return even.join('')+' '+odd.join('');
}

console.log(oddEvenSort("ycolue'vreer"))//should log 'you're clever'
