// 단축 평가 (Short-Circuit Evaluation)

const obj1 = {name : '🐶'};
const obj2 = {name : '🐱', owner : 'Ellie'};

if (obj1 || obj2) {
  console.log('true!');
}

let result = obj1 && obj2;
console.log(result);

result = obj1 || obj2;
console.log(result);

// Example
// 조건이 truthy && 무언가를 해야 할 경우
// 조건이 falsy || 무언가를 해야 할 경우
function changeOwner(animal) {
  if (!animal.owner) {
    throw new Error('no owner!');
  }
  animal.owner = 'change owner!';
}
function makeNewOwner(animal) {
  if (animal.owner) {
    throw new Error('owner existed!');
  }
  animal.owner = 'new owner!';
}

obj1.owner && changeOwner(obj1);
obj2.owner && changeOwner(obj2);
console.log(obj1);
console.log(obj2);

obj1.owner || makeNewOwner(obj1);
obj2.owner || makeNewOwner(obj2);
console.log(obj1);
console.log(obj2);

// Null, Undefined 확인
let item = { price : 1};
const price = item && item.price;
console.log(price);

// Default Parameter: 전달하지 않거나 Undefined 설정
// (||): 값이 falsy한 경우 할당 -> 0, -0, null, undefined, ''
function print(message) {
  const text = message || 'Hello!';
  console.log(text);
}
print();
print(undefined);
print(null);
print(0);