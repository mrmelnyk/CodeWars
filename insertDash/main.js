//Write a function that will insert dashes in between odd numbers that are next to each other.

function insertDash(num) {
    let arr = num.toString().split('');
    let i = arr.length;
    while(i--){
      if(arr[i] % 2 && arr[i+1] % 2){
        arr.splice(i+1, 0, '-');
      }
    }
    return arr.join('');
  }

  console.log(insertDash(12334513))//should log '123-345-1-3'
  