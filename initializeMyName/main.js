//Some people just have a first name; some people have first and last names and some people have first, middle and last names.
//Your task is to initialize the middle names (if there are any).

function initializeNames(name){
    let arr = name.split(' ');
    if(arr.length < 3) return arr.join(' ');
    for(let i=1; i<arr.length-1; i++){
      arr[i] = arr[i][0] + '.';
    }
    return arr.join(' ');
  }

  console.log(initializeNames('John Jacob Schimdt'))//should log 'John J. Schimdt'
  