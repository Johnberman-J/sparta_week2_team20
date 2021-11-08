function getRate(N, stages) {
  let fail = 0;
  let all = 0;

  for (let i = 0; i < stages.length; i++) {
    if (stages[i] == N)
      fail++;
    if (stages[i] >= N)
      all++;
  }

  return (fail / all);
}


function solution(N, stages) {
  let answer = [];

  let data = [];

  for (let i = 1; i <= N; i++) {
    data[i] = getRate(i, stages);
  }


  data = data.map(function (e, i) { return { idx: i, elem: e } }).sort(function (a, b) {
    return b.elem - a.elem;
  })

  for (let key in data) {
    answer.push(data[key]["idx"]);
  }

  return answer;
}


console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]))

// console.log(5.3 > 2.5)
// var arr = [1,5,2,3,8,13, 1];
// arr.map(function(e, i) {return {idx: i, elem: e}; }).sort(function(a, b) {
//     console.log('a.idx:', a.idx, 'b.idx:', b.idx);
//     return a.obj - b.obj;
// });