function solution(a, b) {
    var answer = 0;

    if(b>=a) {
        for(let i=a; i<=b; i++) {
            answer = answer + i;
        }
    } else {
        for(let i=b; i<=a; i++) {
            answer = answer + i
        }
    }

    return answer;
}