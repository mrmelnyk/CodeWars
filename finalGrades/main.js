//Write a function that calculates the final grade of a student depending on two parameters: exam grade and number of projects completed.
//The four types of grades are:
  //100: exam grade of more than 90 or more than 10 projects completed.
  //90: exam grade of more than 75 and a minimum of 5 projects completed.
  //75: exam grade of more than 50 and a minimum of 2 projects completed.
  //0: every other case.
  
function finalGrade(exam, projects){
  if(exam > 90 || projects > 10) return 100;
  if(exam > 75 && projects >= 5) return 90;
  if(exam > 50 && projects >= 2) return 75;
  else return 0;
}

console.log(finalGrade(87, 6))//should log 90
