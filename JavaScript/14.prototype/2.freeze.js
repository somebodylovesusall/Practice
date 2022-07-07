// freeze: 추가, 삭제, 쓰기, 속성 재정의 불가능
// Shallow Copy Freezing
const ellie = { name : 'Ellie' };
const dog = { name : '와우', emoji : '🐶', owner : ellie };
Object.freeze(dog);
dog.name = '멍멍';
console.log(dog);
dog.age = 4;
console.log(dog);
delete dog.name;
console.log(dog);
ellie.name = 'Alley';
console.log(dog);

// seal: 수정 가능 vs 추가, 삭제, 속성 재정의 불가능
const cat = { ...dog };
// Object.assign(cat, dog);
console.log(cat);
Object.seal(cat);
console.log(cat);
cat.name = '냐옹';
console.log(cat);
delete cat.emoji;
console.log(cat);

console.log(Object.isFrozen(dog));
console.log(Object.isSealed(dog));

// preventExtensions: 추가 불가능
const tiger = { name : '어흥' };
Object.preventExtensions(tiger);
console.log(Object.isExtensible(tiger));
tiger.name = '어흐응';
console.log(tiger);
delete tiger.name;
console.log(tiger);
tiger.age = 1;
console.log(tiger);