// 함수 내부에서 외부로부터 주어진 인자의 값을 변경하는 것은 Bad!
// 상태 변경이 필요한 경우 새로운 상태(object, value)를 만들어서 반환해야 함
// Primitive Type: Copy by Value
// Object Type: Copy by Reference
function display(num) {
  num = 5;  // ❌ 외부로부터 주어진 인자를 내부에서 변경하지 말아야 함 ❌
  console.log(num);
}
const value = 4;
display(value);
console.log(value);

function changeName(obj) {        // 함수명부터 변경하는 느낌을 주도록
  return {...obj, name : 'Bob'};  // 반환할 때는 새로운 객체 생성
}

const ellie = {name : 'Ellie'};
displayObj(ellie);
console.log(ellie);