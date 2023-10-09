//Given a string showing either a flat road (_), or a bump (n), determine if you are able to make it home without your car breaking down.
//If you encounter 15 bumps or less return 'Woohoo!' because you made it home, else return 'Car Dead'.

function bump(x) {
  return (x.match(/n/g) || []).length <= 15 ? 'Woohoo!' : 'Car Dead';
}

console.log(bump('__n__nn___nnn____'))//should log 'Woohoo!'
console.log(bump('nnn___nnnnn_nn_nnn_____nn__n_n____________'))//should log 'Car Dead'
