// Object Literal { key : value }
// new Object()
// Object.create();
// Key: string, number, symbol ...
// Value: Primitive Type, object (function)
let apple = {
  name : 'apple',
  'hello-bye' : '✋',
  0 : 1,
  ['hello-bye1'] : '✋'
};

// 속성과 데이터에 접근하기 위해서는
console.log(apple.name);          // Dot Notation
console.log(apple['hello-bye']);  // Bracket Notation
console.log(apple['name']);

// 속성 추가
apple.emoji = '🍎';
console.log(apple.emoji);
console.log(apple['emoji']);

// 속성 삭제
delete apple.emoji;
console.log(apple);