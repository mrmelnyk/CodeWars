//when a person hears about Freud, they hear "sex" because for Freud, everything was related to, and explained by sex.
//In this kata, the function will take a string as its argument, and return a string with every word replaced by the explanation to everything, according to Freud. 
//Note that an empty string, or no arguments, should return an empty string.

function toFreud(string) {
    if(string == '') return '';
    return string.split(' ').map(a => a.replace(a, 'sex')).join(' ');
  }

  console.log(toFreud('This is a test'))//should log 'sex sex sex sex'
  