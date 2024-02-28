//Write a function that takes two arguments, 
//ppg (points per game) and mpg (minutes per game) and returns a straight extrapolation of ppg per 48 minutes rounded to the nearest tenth. 
//Return 0 if 0.

function pointsPer48(ppg, mpg) {
    if(mpg == 0) return 0;
    return +(ppg/mpg * 48).toFixed(1);
  }

  console.log(pointsPer48(5,17))//should log 14.1
  