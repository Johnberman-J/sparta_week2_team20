function solution(s, n) {
  let answer = '';

  for (let i = 0; i < s.length; i++) {
    if (s[i] == ' ') {
      answer += ' ';
    } else if (s[i] >= 'a' && s[i] <= 'z' && s[i].charCodeAt(0) + n > 'z'.charCodeAt(0)) {
      answer += String.fromCharCode('a'.charCodeAt(0) + n - ('z'.charCodeAt(0) - s[i].charCodeAt(0) + 1));
    } else if (s[i] >= 'A' && s[i] <= 'Z' && s[i].charCodeAt(0) + n > 'Z'.charCodeAt(0)) {
      answer += String.fromCharCode('A'.charCodeAt(0) + n - ('Z'.charCodeAt(0) - s[i].charCodeAt(0) + 1));
    } else {
      if (s[i] >= 'A' && s[i] <= 'Z')
        answer += String.fromCharCode(s[i].charCodeAt(0) + n);
      else if (s[i] >= 'a' && s[i] <= 'z')
        answer += String.fromCharCode(s[i].charCodeAt(0) + n);
    }
  }

  return answer;
}
// console.log(String.fromCharCode('a'.charCodeAt(0) + 3))
// console.log('A'.charCodeAt(0) < 'z'.charCodeAt(0))
// console.log(solution("AB", 1));
// console.log(solution("z", 1));
console.log(solution("a B z", 4));
// console.log(String.fromCharCode('a'.charCodeAt(0) + 1))