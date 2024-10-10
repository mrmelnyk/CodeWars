//Write a function that returns the minimal and maximal value of a list (in that order).

function getMinMax(arr){
    let srt = arr.sort((a,b) => a-b);
    return new Array(srt[0], srt[srt.length-1]);
};

console.log(getMinMax([4,1,6,3,4,8,2]))//should log [1,8]
