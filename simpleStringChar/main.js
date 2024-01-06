//You will be given a string and your task will be to return an array of integers detailing the count of uppercase letters, lowercase, numbers and special characters (in that order).

function solve(s){
    let upper = s.match(/[A-Z]/g) || [];
    let lower = s.match(/[a-z]/g) || [];
    let num = s.match(/[0-9]/g) || [];
    let spcl = s.match(/[^A-Z0-9]/ig) || [];
    return [upper.length,lower.length,num.length,spcl.length];
  }

  console.log(solve('!@$asdRED78'))//should log [3,3,2,3]
  