function solution(A) {
  var highestNo = Math.max(...A);
  var chunk,
    noIterations = highestNo;
  function isBigEnough(element, index, array) {
    return element >= highestNo;
  }
  Home:
  for (let i = 0; i < noIterations; i++) {
    for (let i = 0, j = A.length; i < j; i += 1) {
      var tempArray = A.slice(i, i + highestNo);
      if (tempArray.every(isBigEnough) && tempArray.length >= highestNo) {
        break Home;
      }
    }
    highestNo--;
  }
  return highestNo;
}

solution([1, 2, 5, 3, 1, 3]);
