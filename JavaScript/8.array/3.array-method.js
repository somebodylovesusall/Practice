// 배열의 함수들
// 배열 자체를 변경하는지 아니면 새로운 배열을 반환하는지 확인
// 어떤 매개 변수를 전달하는지 확인
const fruits = ['🍌', '🍎', '🍋']

// 특정한 객체가 배열인지 확인
console.log(Array.isArray(fruits));
console.log(Array.isArray({}));

// 특정한 아이템의 위치 찾기
console.log(fruits.indexOf('🍎'));

// 배열 안에 특정한 아이템이 존재하는지 확인
console.log(fruits.includes('🍎'));

// 맨 뒤 추가
let length = fruits.push('🍑');
console.log(fruits);
console.log(length);

// 맨 앞 추가
length = fruits.unshift('🍓');
console.log(fruits);
console.log(length);

// 맨 뒤 제거
let lastItem = fruits.pop();
console.log(fruits);
console.log(lastItem);

// 맨 앞 제거
let firstItem = fruits.shift();
console.log(fruits);
console.log(firstItem);

// 중간 추가 또는 삭제
const deleted = fruits.splice(1, 1);
console.log(fruits);
console.log(deleted);
fruits.splice(1, 1, '🍎', '🍓');
console.log(fruits);

// 기존 배열을 자르기
let newArr = fruits.slice(0, 2);
console.log(newArr);
console.log(fruits);
newArr = fruits.slice(-1);
console.log(newArr);

// 여러 배열을 이어주기
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log(arr1);
console.log(arr2);
console.log(arr3);

// 배열 순서를 거꾸로
const arr4 = arr3.reverse();
console.log(arr4);

console.clear();

// 중첩된 배열을 하나의 배열로 만들기
let arr = [
  [1, 2, 3],
  [4, [5, 6, [3, 4]]],
];
console.log(arr);
console.log(arr.flat(3));

arr = arr.flat(3);

// 특정한 값으로 배열 채우기
arr.fill(0);
console.log(arr);

arr.fill('s', 1, 3);
console.log(arr);

arr.fill('a', 1);
console.log(arr);

// 배열을 문자열로 합하기
let text = arr.join();
console.log(text);
text = arr.join(' | ');
console.log(text);