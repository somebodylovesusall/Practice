// Integer Reversal
/*
  Given an integer, return an integer that is the reverse ordering of numbers.

  Examples:
  reverseInt(15) === 51;
  reverseInt(981) === 189;
  reverseInt(500) === 5;
  reverseInt(-15) === -51;
  reverseInt(-90) === -9;
*/

// 1. forEach method
// 음수 문제를 해결하기 위하여 pop, unshift method를 추가로 사용
function reverseInt1(n) {
  const reversedArr = [];
  n.toString().split("").forEach(elem => reversedArr.unshift(elem));

  if (reversedArr[reversedArr.length - 1] === "-") {
    reversedArr.pop("-");
    reversedArr.unshift("-");
  }

  return Number(reversedArr.join(""));
}

// 2. reverse method
// 앞의 풀이와 거의 동일하지만 reverse method로 더 간결해짐
function reverseInt2(n) {
  const reversedArr = n.toString().split("").reverse();
  if (reversedArr[reversedArr.length - 1] === "-") {
    reversedArr.pop();
    reversedArr.unshift("-");
  }
  return Number(reversedArr.join(""));
}

// 3. parseInt & Math.sign method
// parseInt vs Number: 가장 큰 차이는 parseInt method는 숫자에서 정수만 추출하지만 Number method는 숫자 그대로 추출
// Math.sign method는 부호를 결정하여 양수일 때 1을 반환하고 음수일 때 -1을 반환
function reverseInt3(n) {
  const reversedNum = n.toString().split("").reverse().join("");
  return parseInt(reversedNum) * Math.sign(n);  // parseInt method를 Number method로 바꾸면 숫자로 인식을 못해서 NaN 반환
}