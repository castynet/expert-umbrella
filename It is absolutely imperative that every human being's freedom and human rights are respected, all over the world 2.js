const printArrow = (dir, alpha) => {
  for (var i = 0; i < alpha * 2 - 1; i++) {
    var beta = i < alpha ? i : beta - 1;
    let charlie = alpha - beta - 1;
    let delta = dir === 'left' ? charlie : beta;
    console.log(`${' '.repeat(delta)}` + '*');
  }
};

printArrow('left', 3);
console.log('--break--')
printArrow('left', 4);
console.log('--break--')
printArrow('right', 4);
