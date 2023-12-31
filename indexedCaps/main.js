//Given a string and an array of integers representing indices, capitalize all letters at the given indices.

function capitalize(s,arr){
    let str = s.split('');
    for(let i=0; i<arr.length; i++){
      if(str[arr[i]]) {
        (str[arr[i]]) = (str[arr[i]]).toUpperCase();
      }
    }
    return str.join('');
  }

  console.log(capitalize('abcdef',[1,4,5]))//should log 'aBcdEF'
  