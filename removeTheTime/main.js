//You're re-designing a blog, and the blog's posts have the Weekday Month Day, time format for showing the date and time when a post was made, e.g., Friday May 2, 7pm.
//You're running out of screen real estate, and on some pages you want to display a shorter format, Weekday Month Day that omits the time.
//Write a function that takes the website date/time in its original string format and returns the shortened format.
//Input will always be a string, e.g., "Friday May 2, 7pm". 
//Output will be the shortened string, e.g., "Friday May 2".

function shortenToDate(longDate) {
    let short = longDate.split(',')
    return short[0]
  }

  console.log(shortenToDate('Saturday September 2, 10pm'))//should log 'Saturday September 2'
  console.log(shortenToDate('Monday July 1, 2am'))//should log 'Monday July 1'
  