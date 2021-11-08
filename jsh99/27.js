function solution(num) {
  let cnt = 0;

  while (cnt < 501 && num != 1) {
    if (num % 2 == 0) {
      num /= 2;
    } else if (num % 2 == 1) {
      num = num * 3 + 1;
    }
    cnt++;
  }
  if (cnt > 500)
    return (-1);
  return cnt;
}

console.log(solution(6));
console.log(solution(16));
console.log(solution(626331));