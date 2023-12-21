//The fruit guy has a bag of fruit (represented by an array of strings) and some fruits are rotten. We need to help him replace the rotten fruits with fresh ones. 

function removeRotten(fruits){
  return fruits == null || undefined ? [] : fruits.map(a => a.toLowerCase().replace(/rotten/g, ''));
}

console.log(removeRotten(['apple', 'rottenBanana', 'orange', 'rottenApple']))//should log ['apple', 'banana', 'orange', 'apple']
