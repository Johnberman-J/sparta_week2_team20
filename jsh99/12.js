function solution(price, money, count) {
  var answer = -1;

  const needMoney = price * ((count * (count + 1)) / 2);

  if (money >= needMoney)
    return 0;

  answer = needMoney - money;

  return answer;
}

console.log(solution(3, 20, 4))