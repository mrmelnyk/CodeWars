//write a function that returns the differnce between the largest and the smallest values in an array. If the array contains 1 value, or it is empty, return 0.

function maxDiff(list) {
    let max = list.sort((a,b) => b-a).slice(0,1);
    let min = list.sort((a,b) => a-b).slice(0,1);
    return list.length > 2 ? (max - min) : 0;
  }

  console.log(maxDiff([0,1,3,8,13,-1]))//should log 14
  console.log(maxDiff([]))//should log 0