//given the length of a side and the total volume, determine whether the shape is a cube.

function cubeChecker(volume, side){
  return side > 0 && side**3 == volume ? true:false;
}

console.log(cubeChecker(8, 2))//should log true
