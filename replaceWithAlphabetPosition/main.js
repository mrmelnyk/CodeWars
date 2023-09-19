//In this kata you are required to, given a string, replace every letter with its position in the alphabet.
//If anything in the text isn't a letter, ignore it and don't return it.
//"a" = 1, "b" = 2, etc.

function alphabetPosition(text) {
    let ans = ''
    for(let i = 0; i < text.length; i++){
      let asc = text.toUpperCase().charCodeAt(i)
      if(asc > 64 && asc < 91) ans += asc - 64 + ' '
    }
    return ans.slice(0, ans.length - 1)
  }
  