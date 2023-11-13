//truncate the given name down to two letters and return the name and its truncated version as an array. if the name is two letters or less just return the name.

function whoIsPaying(name){
    return name.length>2 ? [name, name.split('').slice(0,2).join('')] : [name];
  }

  console.log(whoIsPaying('Andrew'))//should log ['Andrew', 'An']
  console.log(whoIsPaying('Me'))//should log ['Me']