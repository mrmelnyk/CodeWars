//Write a function that checks if the string contains the word hello in different languages.

function validateHello(greetings) {
    res =  /(hello)|(ciao)|(salut)|(hallo)|(hola)|(ahoj)|(czesc)/i.test(greetings) 
    return res
  }

  console.log(validateHello('ahoj'))//should log true
  