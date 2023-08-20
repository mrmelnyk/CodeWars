function doubleChar(str) {
    return str.replace(/./g, '$&$&')
   }

   console.log(doubleChar('andrew'))//should log 'aannddrreeww'
   console.log(doubleChar('reux'))//should log 'rreeuuxx'