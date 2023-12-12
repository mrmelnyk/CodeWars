//If you fold a piece of paper enough times, you can reach the moon with it. How many folds does it take? We know that a piece of paper has a thickness of 0.0001m and folding it doubles its thickness. Given a distance in meters, find out how many time you must fold the piece of paper.

function foldTo(dis){
  let count = 0;
  let paper = 0.0001;
  if(dis<0) return null;
  while(paper < dis){
    paper*=2;
    count++;
  }
  return count;
}

console.log(foldTo(384000000))//should log 42
