//You are swimming off shore in the ocean and you and your friends are jumping off a pontoon. When you jump off you see a shark in the water. Using 5 different vvariables, determien if you will reach the pontoon before the shark reaches you.
//The 5 variables are:
  //sharkDistance: distance of the shark from the pontoon.
  //sharkSpeed: speed of the shark.
  //pontoonDistance: your distance from the pontoon.
  //yourSpeed: your swimming speed.
  //dolphin: a boolean value, if true then sharkSpeed is halved. 
  
  function sharkBait(pontoonDistance, sharkDistance, yourSpeed, sharkSpeed, dolphin){
    if(dolphin == true) sharkSpeed = sharkSpeed/2;
    return sharkDistance/sharkSpeed < pontoonDistance/yourSpeed ? 'Shark Bait!' : 'Alive!';
  }
  
  console.log(sharkBait(12, 50, 4, 8, true))//should log 'Alive!'
  