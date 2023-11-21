//We want to generate a function that computes the series starting from 0 and ending until the given number. The output should given all numbers and the total ('0+1+2+3+4+5+6 = 21').
//If the count is negative return a string stating that it is less than 0 ('-15<0').
//If the count is 0, return '0=0'.

var SequenceSum = (function() {
    function SequenceSum() {}
  
    SequenceSum.showSequence = function(count) {
      let arr = [],
          nums = 0;
      if(count == 0) return count + '=0';
      if(count < 0) return count + '<0'
      for (let i=0;i<=count;i++){
        nums+=i
        arr.push(i)
      }
      return arr.join('+')+' = '+nums;
    };
  
    return SequenceSum;
  
  })();

  console.log(SequenceSum.showSequence(6))//should log '0+1+2+3+4+5+6 = 21'
  