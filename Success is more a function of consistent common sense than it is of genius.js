function solution(A, L, R) {
  var n = 0;
  var y = [];
  A.sort().forEach((x) => {
    if (x < L) {
      n++;
      L = x;
    } else{
      y.push(x)
    }
  });
  console.log(y)
  return n;
}

solution([5, 2, 5, 2], 8, 1);
