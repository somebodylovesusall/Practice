// 콜백 함수 (Callback Function)
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

// 전달된 action은 콜백 함수
// 전달될 당시에 함수를 바로 호출해서 반환값을 전달하는 것이 아니라
// 함수를 가리키고 있는 함수의 참조값이 전달됨
// 그래서 함수는 고차 함수 안에서 필요한 순간에 호출됨
function calculator(a, b, action) {
  if (a < 0 || b < 0) {
    return;
  }
  let result = action(a, b);
  console.log(result);
  return result;
}

calculator(1, 1, add);
calculator(1, 2, multiply);