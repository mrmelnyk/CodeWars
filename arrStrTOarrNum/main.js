//Given an array of strings, convert each element to a number.

function toNumArray(strarr){
  return strarr.map(a => Number(a));
}

console.log(toNumArray(['1','2','2.5','2.75','3']))//should log [1,2,2.5,2.75,3]
