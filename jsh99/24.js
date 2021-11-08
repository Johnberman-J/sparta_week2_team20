function solution(n) {
  let answer = 0;

  answer = String(n).split("").sort((a, b) => b - a).join('')
  return Number(answer);
}

console.log(solution(82534891))