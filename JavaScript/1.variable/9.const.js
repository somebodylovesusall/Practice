// let: mutable, value reassignable
let a = 1;
a = 2;

// const: mutable, value not reassignable
const text = 'hello';
// text = 'hi';

// 1. 상수
const MAX_FRUITS = 5;

// 2. 재할당이 불가능한 상수 변수 또는 변수
const apple = {
  name : 'apple',
  color : 'red',
  display : '🍎',
};
// apple = {};
console.log(apple);
apple.color = 'green';
apple.display = '🍏';
console.log(apple);