//Define a method/function that removes from a given array of integers all the values contained in a second array.

Array.prototype.remove_ = function(integer_list, values_list){
    return integer_list.filter(a => !values_list.includes(a));
  }

  a = new Array()

  integer_list = [1,1,3,2,4,5,7,8,9]
  values_list = [1,2,3]
  console.log(a.remove_(integer_list, values_list))//should log [4,5,7,8,9]
  