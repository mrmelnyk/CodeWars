//Complete the function to find the count of the most frequent item of an array. You can assume that input is an array of integers. For an empty array return 0.

function mostFrequentItemCount(collection) {
    let count = 0,
        max = 0;
    for(let i=0; i<collection.length; i++){
      for(let j=0; j<collection.length; j++){
        if(collection[i] == collection[j]) count++;
        if(max<count) max = count;
      }
      count = 0;
    }
    return max;
  }

  console.log(mostFrequentItemCount([1,1,1,3,2,3,5,3,1,1,8]))//should log 5
  