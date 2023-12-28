//You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.
//Find max(abs(length(x) − length(y))).
//If a1 and/or a2 are empty return -1.

function mxdiflg(a1, a2) {
    if(a1.length == 0 || a2.length ==0) return -1;
    let l1a = a1.sort((a,b) => a.length - b.length)[0].length;
    let l1b = a1.sort((a,b) => b.length - a.length)[0].length;
    let l2b = a2.sort((a,b) => a.length - b.length)[0].length;
    let l2a = a2.sort((a,b) => b.length - a.length)[0].length;
    return Math.abs(l1a - l2a)>Math.abs(l1b -l2b) ? Math.abs(l1a - l2a) : Math.abs(l1b -l2b);
  }

  console.log(mxdiflg(['asdf','a','jfkdsoidj','fjfiddkj'],['fhdjsjid','ghdjkku','ghduahsf','fjidihha','fjdiis']))//should log 7
  