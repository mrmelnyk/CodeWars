//Write a function that reverses the bits in an integer.
//For example, the number 417 is 110100001 in binary. Reversing the binary is 100001011 which is 267.
//You can assume that the number is not negative.

function reverseBits (n) {
    let bin = n.toString(2).split('').reverse().join('')
    return parseInt(bin, 2)
  }

  console.log(reverseBits(417))//should log 267
  console.log(reverseBits(1024))//should log 1