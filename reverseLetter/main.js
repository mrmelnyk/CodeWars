function reverseLetter(str) {
    let a = str.replaceAll(/[^a-zA-Z]/g, '');
    return a.split('').reverse().join('');
  }

  console.log(reverseLetter('werd3$na'))//should log 'andrew'
  console.log(reverseLetter('gn%^4i09!@#[]]]d; <>o123c098'))//should log 'coding'