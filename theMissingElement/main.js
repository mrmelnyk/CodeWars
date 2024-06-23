/*
Fellow code warrior, we need your help! We seem to have lost one of our sequence elements, and we need your help to retrieve it!

Our sequence given was supposed to contain all of the integers from 0 to 9 (in no particular order), but one of them seems to be missing.

Write a function that accepts a sequence of unique integers between 0 and 9 (inclusive), and returns the missing element.
*/

function getMissingElement(superImportantArray){
    let order = superImportantArray.sort((a,b) => a-b);
    for(let i=0; i<order.length; i++){
      if(order[i]+1 === 10) return 0;
      if(order[i+1] != order[i]+1) return order[i]+1;
    }
  }

  console.log(getMissingElement([1,5,4,9,6,8,2,7]))//should log 3
  