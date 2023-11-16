//A child is playing with a bouncing ball on the nth floor of a building, the height of this floor is h. They drop the ball out of the window and the ball bounces b of its original height. You are looking out a window with its own height, represented by win. How many times will you see the ball pass by your window?
//3 conditions must be valid in order for each bounce test:
  //h must be greater than 0
  //b must be greater than 0 and less than 1
  //win must less than h
//If these conditions are not met return -1

function bouncingBall(h, b, win){
  if(h<=0 || b<=0 || b>=1 || win>=h) return -1
  
  let views = 1;
  while((h*=bounce)>win){
    views += 2;
  }
  return views
}

console.log(bouncingBall(3, 0.66, 1.5))//should log 3
console.log(bouncingBall(3, 1, 1.5))//should log -1
