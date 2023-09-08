//Complete the function which will return the area of a circle with the given radius.
//Round the returned number to two decimal places. If the radius is not positive or not a number, return false.

var circleArea = function(radius) {
    if (radius <= 0){
      return false
    } else if (radius != +radius) {
      return false
    } else {
      return +(Math.PI*radius**2).toFixed(2)
    }
  };

  console.log(circleArea(-121))//should log false
  console.log(circleArea(0))//should log false
  console.log(circleArea(68))//should log 14526.72