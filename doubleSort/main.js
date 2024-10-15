/* 
You are given an array. The values in the array will either be numbers or strings, or a mix of both. 
You will not get an empty array, nor a sparse one.

Your job is to return a single array that has first the numbers sorted in ascending order, followed by the strings sorted in alphabetic order. 
The values must maintain their original type.

Note that numbers written as strings are strings and must be sorted with the other strings.
*/

function dbSort(a){
    return a.sort((x,y) => ((typeof y === 'number') - (typeof x === 'number')) || (x > y ? 1 : -1));
  }

  console.log(dbSort([1,5,3,'ab',-1,'cd','a']))//should log [-1,1,3,5,'a','ab','cd']