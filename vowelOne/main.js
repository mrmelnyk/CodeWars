//Write a function that replaces all the vowels in a string with a 1, and replace everything else with a 0.

function vowelOne(s){
    return s.replace(/[^aeiou]/ig, '0')
            .replace(/[aeiou]/ig, '1');
  }

  console.log(vowelOne('Hello World!'))//should log '010010010000'