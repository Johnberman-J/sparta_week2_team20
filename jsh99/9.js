function solution(phone_number) {
  let answer = '';

  const idx = phone_number.length - 4;

  for (let i = 0; i < idx; i++) {
    answer += '*'
  }
  for (let i = idx; i < phone_number.length; i++) {
    answer += phone_number[i];
  }

  return answer;
}

console.log(solution("01033334444"))