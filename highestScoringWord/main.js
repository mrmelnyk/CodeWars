/*
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

For example, the score of abad is 8 (1 + 2 + 1 + 4).

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
*/

function high(x){
    let arr = x.split(' ');
    let nums = arr.map(a => a.split('').map(b => b.charCodeAt()-96).reduce((c,d) => c+d,0));
    let largest = 0;
    for(let i=0; i<nums.length; i++){
      if(nums[i] > largest) largest = nums[i];
    }
    return arr[nums.indexOf(largest)]
  }

  console.log(high('what time are we climbing to the volcano'))//should log 'volcano'
  