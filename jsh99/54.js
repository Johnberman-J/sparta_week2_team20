function solution(board, moves) {
  let answer = 0;
  let selected = [];

  for (let i = 0; i < moves.length; i++) {
    let idx = moves[i] - 1;

    for (let j = 0; j < board.length; j++) {
      if (board[j][idx] != 0) {
        selected.push(board[j][idx]);
        board[j][idx] = 0;
        break;
      }
    }

    if (selected.length >= 2 && (selected[selected.length - 1] == selected[selected.length - 2])) {
      selected.pop();
      selected.pop();
      answer += 2;
    }
  }


  return answer;
}

console.log(solution([[0, 0, 0, 0, 0], [0, 0, 1, 0, 3], [0, 2, 5, 0, 1], [4, 2, 4, 4, 2], [3, 5, 1, 3, 1]], [1, 5, 3, 5, 1, 2, 1, 4]));