// Quiz!
let num = 2;
// num이 짝수면 👍 홀수면 👎 출력
// if
if (num % 2 === 0) {
  console.log('👍');
} else {
  console.log('👎');
}
// ternary
let emoji = num % 2 === 0 ? '👍' : '👎';
console.log(emoji);