// Scope: { }, 조건문() { }, 반복문() { }, 함수() { }
// 코드 블록 외부에서는 블록 내부의 변수를 참조할 수 없음
{
  const a = 'a';
  console.log(a);
}
console.log(a);
const b = 'b';

// 함수 외부에서는 함수 내부의 변수를 참조할 수 없음
function print() {
  const message = 'Hello World';
  console.log(message);
}
console.log(message);

// 함수 외부에서는 함수의 매개 변수를 참조할 수 없음
function sum(a, b) {
  console.log(a, b);
}
console.log(a, b);
