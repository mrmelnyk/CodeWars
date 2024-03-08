//Write a function that takes an integer of seconds and converts it to a string that describes how many hours and minutes comprise that many seconds.

function toTime(s) {
    let m = s/60;
    let h = m/60;
    if(m<60){
      return `0 hour(s) and ${Math.floor(m)} minute(s)`;
    } else {
      return `${Math.floor(h)} hour(s) and ${Math.floor((h-Math.floor(h))*60)} minute(s)`;
    }
  }

  console.log(toTime(3600))//should log '1 hour(s) and 0 minute(s)'
  console.log(toTime(323500))//should log '89 hour(s) and 51 minute(s)'
  