//Every Friday and Saturday night you count the number of sheep that return to your farm (once they come back they won't leave again). The sheep return in groups of 1 or greater, and if no sheep return nothing will be returned in the array. You know the total amount of sheep you started with, so you need to figure out how many did not comme back and are lost.

function lostSheep(friday, saturday, total){
  if(friday.length === 0) friday.push(0);
  if(saturday.length === 0) saturday.push(0);
  return Math.abs(friday.concat(saturday).reduce((a,b) => a+b) - total);
}

console.log(lostSheep([1,2],[3,4],15))//should log 5
