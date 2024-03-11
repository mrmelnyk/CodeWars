/*
Haskell has useful ways of dealing with lists: Head, Tail, Init, and Last. Recreate these as functions in javascript.
*/

function head(n) {
    return n[0];
  }
  
  function tail(n) {
    return n.slice(1);
  }
  
  function init(n) {
    return n.slice(0, -1);
  }
  
  function last(n) {
    return n[n.length-1];
  }

  console.log(head([1,2,3,4]))//should log 1
  console.log(tail([1,2,3,4]))//should log [2,3,4]
  console.log(init([1,2,3,4]))//should log [1,2,3]
  console.log(last([1,2,3,4]))//should log 4