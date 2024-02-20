//Given two strings, return the characters that are not common between the two strings as a single string of their own. The characters will retain the same order.

function solve(a,b){
    let arr1 = a.split('');
    let arr2 = b.split('');
    let arr11 = arr1.filter(v => !arr2.includes(v));
    let arr21 = arr2.filter(v => !arr1.includes(v));
    return arr11.concat(arr21).join('');
  };

  console.log(solve('abdc','ajkb'))//should log 'dcjk'
  