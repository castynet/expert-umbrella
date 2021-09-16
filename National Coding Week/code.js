// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
  while (S.search(/abb/i) !== -1) {
    S = S.replace(/abb/gi, "baa");
  }
  return S;
}

console.log(solution("ababb"));
console.log(solution("abbbabb"));
console.log(solution("aaabab"));
