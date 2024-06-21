//Write a function that flattens an Array of Array objects into a flat Array. Your function must only do one level of flattening.

function flatten(arr){
    return arr.flat();
}

console.log(flatten([[[1],[2]],[[3],[4]],[5]]))//should log [[1],[2],[3],[4],5]

