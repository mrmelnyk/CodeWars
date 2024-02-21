//Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, 
//with the same multiplicities (the multiplicity of a member is the number of times it appears). 
//"Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

function comp(array1, array2){
    return !!array1 && !!array2 && array1.map(a => a*a).sort((b,c) => b-c).join('') == array2.sort((b,c) => b-c).join('');
  }

  console.log(comp([121, 144, 11, 19], [11*11, 121*121, 19*19, 144*144]))//should log true
  