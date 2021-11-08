function solution(s) {
  let answer = '';
  console.log(s.split(''))
  answer = s.split('').sort((a, b) => b.charCodeAt(0) - a.charCodeAt(0)).join('')


  return answer;
}

console.log(solution("Zbcdefg"))
// console.log('a' > 'b')