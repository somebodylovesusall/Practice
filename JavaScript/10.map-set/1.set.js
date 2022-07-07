// Set: 중복 불가능
// 배열
const set = new Set([1,2,3]);
console.log(set);

// 크기
console.log(set.size);

// 존재 유무
console.log(set.has(2));
console.log(set.has(6));

// 순회
set.forEach((item) => console.log(item));
for (const value of set.values()) {
  console.log(value);
}

// 추가
set.add(6);
console.log(set);
set.add(6);
console.log(set);

// 삭제
set.delete(6);
console.log(set);

// 전부 삭제
set.clear();
console.log(set);

// 객체
const obj1 = { name : '🍎', price : 8};
const obj2 = {name : '🍌', price : 5};
const objs = new Set([obj1, obj2]);

obj1.price = 10;
objs.add(obj1);
console.log(objs);

const obj3 = { name : '🍌', price : 5};
objs.add(obj3);
console.log(objs);
obj3.price = 8;
console.log(objs);