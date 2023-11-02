//Sort the given array based on the length of the strings within the array. Sort from shortest to longest.

function sortByLength(arr){
  return arr.sort((a,b) => a.length - b.length);
}

console.log(sortByLength(['and', 'it', 'I', 'sort']))//should log ['I', 'it', 'and', 'sort']
