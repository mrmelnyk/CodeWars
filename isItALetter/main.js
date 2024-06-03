//Write a function, isItLetter or is_it_letter or IsItLetter, which tells us if a given character is a letter or not.

function isItLetter(character) {
    return character.match(/[A-Z]/ig) ? true : false;
  }

  console.log(isItLetter('d'))//should log true
  console.log(isItLetter('1'))//should log false
