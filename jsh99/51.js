function num_to_binary(N, len) {
  let result = [];
  while (N >= 2) {
    result.push(N % 2);
    N = parseInt(N / 2);
  }
  result.push(N);
  for (let i = result.length; i < len; i++) {
    result.push(0);
  }
  result = result.reverse();
  return (result);
}


function solution(n, arr1, arr2) {
  let answer = [];

  let map1 = [];
  let map2 = [];

  for (let i = 0; i < arr1.length; i++) {
    map1.push(num_to_binary(arr1[i], n));
  }

  for (let i = 0; i < arr2.length; i++) {
    map2.push(num_to_binary(arr2[i], n));
  }

  for (let i = 0; i < n; i++) {
    let temp = '';
    for (let j = 0; j < n; j++) {
      if (map1[i][j] | map2[i][j] == 1)
        temp += '#';
      else
        temp += ' ';
    }
    answer.push(temp);
  }

  return answer;
}

solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]);


// console.log(1 | 1);
// console.log(1 | 0);
// console.log(0 | 1);
// console.log(0 | 0);


// console.log(num_to_binary(9, 5))
// console.log(num_to_binary(20, 5))
// console.log(num_to_binary(28, 5))
// console.log(num_to_binary(18, 5))