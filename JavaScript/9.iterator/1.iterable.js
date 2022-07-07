// Iterable: 순회 가능
// [Symbol.iterator](): Iterator{};
// Symbol 정의를 가진 객체 또는 특정한 함수가 Iterator를 return 한다는 것은 순회 가능 객체를 의미
// 순회 가능하면 무엇을 할 수 있는가? for ... of, spread 연산자 사용 가능
const array = [1, 2, 3];
for (const item of array) {
  console.log(item);
}

const obj = {0 : 1, 1 : 2};
for (const item in obj) {   // key를 출력
  console.log(item);
} 

const iterator = array.values();
while (true) {
  const item = iterator.next();
  if (item.done) break;
  console.log(item.value);
}
// for (const item of iterator) {
//   console.log(item);
// } 