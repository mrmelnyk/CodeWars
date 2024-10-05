//Write a function that filters out all the words in a string that are longer than 'n'.

function filterLongWords(str, n) {
    //First, we want to split the string into an array so that we can determine the length of individual words
    let arr = str.split(' ');
    //Next, we are going to filter the array for any words that are n or longer
    return arr.filter(a => a.length >= n);
};

console.log(filterLongWords('Hello my name is Andrew', 5))//should log ['Hello', 'Andrew']
console.log(filterLongWords('This will filter all the long words out of the sentence', 4))//should log ['This','will','filter','long','words','sentence']
