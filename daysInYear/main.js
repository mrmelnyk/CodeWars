//Write a function to determine whether a year will be a leap year. Return the number of days in the year as a string.

function yearDays(year){
    if(year%400==0) return `${year} has 366 days`;
    if(year%4==0 && year%100!=0) return `${year} has 366 days`;
    return `${year} has 365 days`;
  }

  console.log(yearDays(2016))//should log '2016 has 366 days'
  