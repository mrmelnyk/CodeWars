/*
Everybody knows the classic "half your age plus seven" dating rule that a lot of people follow. It's the 'recommended' age range in which to date someone.
Given an integer (1 <= n <= 100) representing a person's age, return their minimum and maximum age range.

This equation doesn't work when the age <= 14, so use this equation instead:
min = age - 0.10 * age
max = age + 0.10 * age

You should floor all your answers so that an integer is given instead of a float (which doesn't represent age). Return your answer in the form [min]-[max]
*/

function datingRange(age){
    let lowmin = Math.floor(age - 0.1 * age);
    let lowmax = Math.floor(age + 0.1 * age);
    let highmin = Math.floor(age/2 + 7);
    let highmax = Math.floor((age - 7)*2);
    return age <= 14 ? `${lowmin}-${lowmax}` : `${highmin}-${highmax}`;
  }

  console.log(datingRange(35))//should log '24-56'
  