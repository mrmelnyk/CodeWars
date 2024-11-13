/*
A Happy year is one in which there are only distinct digits. Eg. 2014
Your job is to find the next happy year from the given year.
*/

function nextHappyYear(year){
    while (new Set(String(++year).split('')).size < 4);
    return year
  }

  console.log(nextHappyYear(1123))//should log 1203