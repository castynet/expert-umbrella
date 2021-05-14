function maxNum(n, m, k) {
  return Number(
    n
      .concat(m)
      .sort((a, b) => b - a)
      .slice(0, k)
      .toString()
      .split(',')
      .join('')
  );
}

n = [3, 4, 6, 5];
m = [9, 0, 2, 5, 8, 3];
k = 5;

maxNum(n, m, k);
