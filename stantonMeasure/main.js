//The Stanton measure of an array is computed as follows: count the number of occurences for value 1 in the array. Let this count be n.
//The Stanton measure is the number of times that n appears in the array.

//Write a function which takes an integer array and returns its Stanton measure.

function stantonMeasure(a){
    let count = 0;
    let stant = 0;
    for(let i=0; i<a.length; i++){
      if(a[i] == 1) count++;
    }
    for(let j=0; j<a.length; j++){
      if(a[j] == count) stant++;
    } 
    return stant;
  }

  console.log(stantonMeasure([1,4,3,2,1,2,3,2]))//should log 3