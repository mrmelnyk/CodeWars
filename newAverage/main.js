/*
Write a function that will calculate what the next donation will need to be in order to hit the new average amount for your organization.
*/

function newAvg(arr, newavg) {
    if(arr.length == 0) return newavg;
    let avg = arr.reduce((a,b) => a+b) / (arr.length + 1);
    let donation = Math.ceil((newavg - avg) * (arr.length + 1));
    if(donation <= 0) throw new Error('Expected New Average is too low');
    return donation;
  }

  console.log(newAvg([14,30,5,7,9,11,16], 90))//should log 628
  