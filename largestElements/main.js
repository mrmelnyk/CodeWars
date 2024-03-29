//Write a program that outputs the top n elements from a list in ascending order. If 0 return an empty array.

function largest(n, array) {
    if(n === 0) return [];
    return array.sort((a,b) => b-a).slice(0,n).sort((c,d) => c-d);
  }

  console.log(largest(3, [3,4,7,9,1,5]))//should log [5,7,9]
  