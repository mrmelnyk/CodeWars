//A printer uses printer codes to print out labels. Each printer code is given as a string. The printer codes only accept the letters a-m. 
//Something is wrong with the printer and it has been using letters outside of the acceptable range. You must count how many letters fall outside of the acceptable range,
//and return the error rate of the printer.
//EG. 'aaaammmmeeeeeeddddfffgggx' = 1/26

function printerError(s) {
    return `${(s.match(/[n-z]/g) || []).length}/${s.length}`
  }

  console.log(printerError('aaammmx'))//should log 1/7