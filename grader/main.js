/*Create a function that takes a number as an argument and returns a grade based on that number.

Anything greater than 1 or less than 0.6	"F"
0.9 or greater	"A"
0.8 or greater	"B"
0.7 or greater	"C"
0.6 or greater	"D"
*/

function grader(score) {
    if(score > 1 || score < 0.6) return 'F';
    if(score >= 0.9) return 'A';
    if(score >= 0.8) return 'B';
    if(score >= 0.7) return 'C';
    if(score >= 0.6) return 'D';
  }

  console.log(grader(1.3))//should log 'F'
  console.log(grader(0.89))//should log 'B'
  