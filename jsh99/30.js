function solution(sizes) {
  let answer = 0;

  let min1 = 0;
  let min2 = 0;

  for (let i = 0; i < sizes.length; i++) {
    if (sizes[i][0] > sizes[i][1]) {
      let temp = sizes[i][0];
      sizes[i][0] = sizes[i][1];
      sizes[i][1] = temp;
    }
    if (min1 < sizes[i][0])
      min1 = sizes[i][0];
    if (min2 < sizes[i][1])
      min2 = sizes[i][1];
  }


  answer = min1 * min2;
  return answer;
}

console.log(solution([[60, 50], [30, 70], [60, 30], [80, 40]]))
console.log(solution([[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]]))
console.log(solution([[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]]))