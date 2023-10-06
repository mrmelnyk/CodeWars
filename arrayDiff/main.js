//implement a difference function that subtracts one array from another and returns the result.
//It should take all the vaules from list b and remove them from list a. 

function arrayDiff(a,b) {
  let iterator = b.values();
  for (let elements of iterator){
    let i = 0;
    while(i < a.length){
      if(a[i] === elements){
        a.splice(i,1)
      } else {
        ++i
      }  
    }    
  }
  return a
}

console.log(arrayDiff([1,2,3], [2]))//should log [1,3]
  