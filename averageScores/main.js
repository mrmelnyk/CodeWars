//Write a function that returns the average of an array, rounded to the nearest whole number.

function average(scores){
  return Math.round(score.reduce((a,b) => a+b) / scores.length);
}

console.log(average([49,3,5,300,7]))//should log 73
