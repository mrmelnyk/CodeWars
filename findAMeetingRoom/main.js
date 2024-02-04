//Given an array, find the first empty meeting room. Empty rooms are represented by an 'O' and full room by an 'X'.

function meeting(x){
    return x.indexOf('O') >= 0 ? x.indexOf('O') : 'None available!';
  }

  console.log(meeting(['O','X','X','X']))//should log 0
  