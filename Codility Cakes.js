function solution(N, K, A, B, C) {
  var cakes = Array.from({ length: N }, () => []),
    q = 0,
    i = 0,
    valid = 0,
    len = C.length;

  while (i < len) {
    var x = A[i],
      y = B[i];

    while (x <= y) {
      cakes[x - 1].push(C[i]);
      x++;
    }
    i++;
  }

  q = 0;

  while (q < N) {
    var arr = cakes[q];
    var size = arr.length === K;
    var order = arr.every(
      (num, i) => i === arr.length - 1 || arr[i + 1] - num === 1
    );
    
    if (size && order) {
      if (order){valid++;}
      
    }
    q++;
  }
  return valid;
}

var N = 5;
var K = 3;
var A = [1, 1, 4, 1, 4];
var B = [5, 2, 5, 5, 4];
var C = [1, 2, 2, 3, 3];

solution(N, K, A, B, C);
