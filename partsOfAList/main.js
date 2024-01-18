//Write a function that gives all the ways that you can divide an array into two non-empty parts.

function partlist(arr) {
    let array  
    let finalArray = [];
    for(let i=1; i<arr.length; i++){
      array = [];
      array.push(arr.slice(0,i). join(' '));
      array.push(arr.slice(i).join(' '));
      finalArray.push(array);
    }
    return finalArray;
  }

  console.log(partlist(['I', 'love', 'coding', 'challenges']))//should log [['I', 'love coding challenges], ['I love', 'coding challenges'], ['I love coding', 'challenges']]
  