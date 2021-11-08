function getRate(cnt) {
  if (cnt >= 2 && cnt <= 6)
    return (7 - cnt);
  else
    return (6);
}

function solution(lottos, win_nums) {
  let answer = [];
  let matching_num = 0;

  let cnt_zero = 0;
  for (let i = 0; i < lottos.length; i++) {
    if (lottos[i] == 0)
      cnt_zero++;
    if (win_nums.includes(lottos[i]))
      matching_num++;
  }
  answer.push(getRate(matching_num + cnt_zero));
  answer.push(getRate(matching_num));

  return answer;
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]));
console.log(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25]));