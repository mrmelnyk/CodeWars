//Given an unsorted array of 3 integers, determine if if is possible to form a Pythagorean Triple using those integers.

function isPTriple(ints){
  if((int[0]**2)+(int[1]**2) == (int[2]**2)) return true;
  if((int[1]**2)+(int[2]**2) == (int[0]**2)) return true;
  if((int[2]**2)+(int[0]**2) == (int[1]**2)) return true;
  else return false;
}

console.log(isPTriple([3,4,5]))//should log true;
console.log(isPTriple([3,5,9]))//should log false;
