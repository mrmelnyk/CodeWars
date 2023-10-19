//Reverse the given stream of data. Within the stream are segments that are all 8 bits long. You need to separate each segment, and reverse the order in which they are given. After they have been reversed, return the stream as a whole again.

function dataReverse(data){
  let arr = [];
  let size = 8;
  for (let i=0; i<data.length; i+=size){
    arr.push(data.slice(i,(i+size)));
  }
  return arr.reverse().flat();
}

console.log(dataReverse([1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1]))//should log [1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1]