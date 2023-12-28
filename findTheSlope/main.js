//Given an array of 4 integers [a,b,c,d] representing two points (a, b) and (c, d), return a string representation of the slope of the line joining these two points.
//For an undefined slope (division by 0), return undefined . Note that the "undefined" is case-sensitive.

function slope([ a, b, c, d ]) {
    let slope = (d - b) / (c - a);
    return Number.isFinite(slope) ? `${slope}` : 'undefined';
  }

  console.log(slope([2,7,4,-7]))//should log '-7'