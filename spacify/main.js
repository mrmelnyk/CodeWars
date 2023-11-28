//Modify the spacify function so that it returns the given string with spaces inserted between each character.

function spacify(str) {
    return str.split('').join(' '); 
  }

  console.log(spacify('hello world'))//should log 'h e l l o  w o r l d'
  