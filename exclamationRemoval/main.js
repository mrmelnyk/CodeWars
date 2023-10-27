//Remove all the exclamation marks within the string except one at the very end of the string.

function remove(string){
  let str = string.replace(/[!]/g, '');
  return `${str}!`;
}

console.log(remove('!!!Hello! World!!!'))//should log 'Hello World!'
