//You have a box that has items stacked inside. You also have a switch that will change the direction of the gravity in the box. You can change the gravity to the left or the right. Using this determine which way the boxes will end up stacked when you change thee gravity.

function flip(d,a){
  return d == 'R' ? a.sort((x,y) => x-y,0) : a.sort((x,y) => y-x, 0);
}

console.log(flip('L', [4,5,2,1,5,]))//should log [5,5,4,2,1]
