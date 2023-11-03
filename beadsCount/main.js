//In the sequence, there are 2 red beads inbetween every 2 blue beads. The sequence always starts and ends with a blue bead. Given the number of blue beads write a function that returns the number of red beads. If there are less than 2 blue beads return 0.

function beadCount(n){
  return n > 2 ? (n*2) - 2 : 0;
}

console.log(beadCount(6))//should log 10
