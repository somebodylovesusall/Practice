// 전개 구문 (Spread Operator)
// 모든 Iterable은 Spread 가능
// 순회 가능한 것들은 펼쳐질 수 있음
// function(...iterable)
// [...iterable]
// { ...obj }
// ECMAScript 2018

function add(a, b, c) {
  return a + b + c;
}
const nums = [1, 2, 3];
console.log(add(...nums));

// Rest Parameters
function sum(first, second, ...nums) {
  console.log(nums);
}
sum(1, 2, 0, 1, 2, 4);

// Array Concat
const fruits1 = ['🍏', '🥝'];
const fruits2 = ['🍓', '🍌'];
let arr = fruits1.concat(fruits2);
console.log(arr);
arr = [...fruits1, '🍓', ...fruits2];
console.log(arr);

// Object Concat
const ellie = {name : 'Ellie', age : 20, home : {address : 'home'}};
const updated =  {
  ...ellie,
  job : 'S/W Engineer',
};
console.log(ellie);
console.log(updated);