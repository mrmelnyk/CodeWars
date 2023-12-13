//Find the index of the vowels in a given word and return their position as an array.

function vowelIndices(word){
  let vowels = ['a','e','i','o','u','y'];
  let indices = [];
  for(let i=0; i<word.length; i++){
    if(vowels.indexOf(word[i].toLowerCase())>-1){
      indices.push(i+1);
    }
  }
  return indices;
}

console.log(vowelIndices('Apple'))//should log [1,5]
