const fruits = ['🍌', '🍓', '🍇', '🍓'];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// 배열을 순회하며 원하는 아이템 반환
fruits.forEach(function(value) {
  console.log(value);
});
fruits.forEach((value) => console.log(value));

// 조건에 맞는 아이템 반환
// find: 제일 먼저 조건에 맞는 아이템 반환
const item1 = {name : '🥛', price : 2};
const item2 = {name : '🍪', price : 3};
const item3 = {name : '🍙', price : 1};
const products = [item1, item2, item3, item2];
let result = products.find((value) => value.name === '🍪');
console.log(result);

// findIndex: 제일 먼저 조건에 맞는 아이템의 인덱스 반환
result = products.findIndex((value) => value.name === '🍪');
console.log(result);

// 배열의 아이템들이 부분적으로 조건에 맞는지 확인
result = products.some((item) => item.name === '🍪');
console.log(result);

// 배열의 아이템들이 전부 조건에 맞는지 확인
result = products.every((item) => item.name === '🍪');
console.log(result);

// 조건에 맞는 모든 아이템들을 새로운 배열로 반환
result = products.filter((item) => item.name === '🍪');
console.log(result);

console.clear();

// Map: 배열의 아이템들을 각각 다른 아이템으로 매핑하도록 변환해서 새로운 배열로 생성
const nums = [1, 2, 3, 4, 5];
result = nums.map(item => item * 2);
console.log(result);
result = nums.map((item) => {
  if (item % 2 === 0) {
    return item * 2;
  } else {
    return item;
  }
});
console.log(result);

// FlatMap: 중첩된 배열을 하나로 펴줌
result = nums.map((item) => [1, 2]);
console.log(result);

result = nums.flatMap((item) => [1, 2]);
console.log(result);

result = ['dream', 'coding'].map((text) => text.split(''));
console.log(result);

result = ['dream', 'coding'].flatMap((text) => text.split(''));
console.log(result);

// Sort: 배열의 아이템을 문자열 형태의 오름차순으로 정렬
const texts = ['hi', 'abc'];
texts.sort();
console.log(texts);

const numbers = [0, 5, 4, 2, 1, 10];
numbers.sort();
console.log(numbers);
// < 0: 오름차순
// > 0: 내림차순
numbers.sort((a, b) => a - b);
console.log(numbers);

// Reduce: 배열의 요소들을 접어서 값을 하나로 반환
result = [1,2,3,4,5].reduce((sum, value) => (sum += value), 0);
console.log(result);