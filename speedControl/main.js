//Given an array with distances (x) marked at a set interval in seconds (s), return the maximum average speed per hour.  

function gps(s, x){
  if(x.length < 2){
    return 0;
  }
  
  let diff = [];
  for(let i=0; i<x.length-1; i++){
    diff.push((x[i+1]-x[i])*3600/s);
  }
  return Math.max(...diff);
}

console.log(gps(20, [0.0,0.23,0.46,0.69,0.92,1.15,1.38,1.61]))//should log 41
