//Given a string with a cat 'C' and a mouse 'm' and spaces '.' inbetween, determine if the cat will catch the mouse. If there are 3 or less spaces, the cat will catch the mouse.

function catMouse(str){
  let distance = str.replace(/[cm]/ig, '');
  return distance.length > 3 ? 'Escaped!' : 'Caught!';
}

console.log(catMouse('C....m'))//should log 'Escaped!'
