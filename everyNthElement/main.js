//Write a function that returns every nth element in an array. 
//You will be given the interval and the starting point of the array.

function every(arr, int, str){
    if(int == null) return arr;
    if(str == null) str == 0;
    if(str!=0) arr = arr.slice(str);
    return arr.filter((e,i) => {
      return (i)%(int) === 0;
    });
  };


  console.log(every([0,1,2,3,4],2,1))//should log [1,3]
  