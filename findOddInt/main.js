//Given an array of integers, find the one that appears an odd number of times.

function findOdd(a) {
    let count = 0;
    for(let i=0; i<a.length; i++){
        for(let j=0; j<a.length; j++){
            if(a[i] == a[j]){
                count++;
            }
        }
        if(count % 2 != 0){
            return a[i];
        }
    }
}

console.log(findOdd([1,1,2,2,3,3,4,5,5]))//should log 4
