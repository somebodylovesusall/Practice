// Map: Key는 중복 불가능, Value는 중복 가능
const map = new Map([
  ['key1', '🍎'],
  ['key2', '🍌']
]);
console.log(map);

// 크기 
console.log(map.size);

// 존재 유무
console.log(map.has('key1'));
console.log(map.has('key6'));

// 순회
map.forEach((value, key) => console.log(key, value));
console.log(map.keys());
console.log(map.values());
console.log(map.entries());

// 탐색
console.log(map.get('key1'));
console.log(map.get('key2'));
console.log(map.get('key4'));

// 추가
map.set('key3', '🥝');
console.log(map);

// 삭제
map.delete('key3');
console.log(map);

// 전부 삭제
map.clear();
console.log(map);

// 객체와의 차이점
const key = { name : 'milk', price : 10};
const milk = { name : 'milk', price : 10, description: 'delicious'};
const obj =  {
  [key] : milk,
};
console.log(obj);
const map2 = new Map([[key, milk]]);
console.log(map2);
console.log(obj[key]);
console.log(map2[key]);
console.log(map2.get(key));