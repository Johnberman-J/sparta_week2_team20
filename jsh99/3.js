function solution(s) {
  let answer = '';

  if (s.length % 2 == 0) {
    const idx = s.length / 2 - 1;
    answer += s[idx];
    answer += s[idx + 1];
  } else {
    const idx = parseInt(s.length / 2);
    answer += s[idx];
  }
  return answer;
}

console.log(solution("abcab"));
console.log(solution("hello"));
console.log(solution("name"));