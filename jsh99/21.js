function solution(s) {
  let answer = '';

  let temp = s.split(' ');

  for (let i = 0; i < temp.length; i++) {
    for (let j = 0; j < temp[i].length; j++) {
      if (j % 2 == 0) {
        answer += temp[i][j].toUpperCase();
      } else {
        answer += temp[i][j].toLowerCase();
      }
    }
    if (i + 1 !== temp.length)
      answer += ' ';
  }

  return answer;
}

console.log(solution("try hello world"))
console.log(solution("test my case"))