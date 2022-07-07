const dog = { name : '와우', emoji : '🐶' };

console.log(Object.keys(dog));
console.log(Object.values(dog));
console.log(Object.entries(dog));

console.log('name' in dog);
console.log(dog.hasOwnProperty('name'));

// 객체 각각의 속성은 Property Descriptor 객체로 저장
const descriptors = Object.getOwnPropertyDescriptors(dog);
console.log(descriptors);

const descriptor = Object.getOwnPropertyDescriptor(dog, 'name');
console.log(descriptor);

Object.defineProperty(dog, 'name', {
  value : '멍멍',
  writable : false,
  enumerable : false,
  configurable : false
});

console.log(dog.name);
console.log(Object.keys(dog));
delete dog.name;
console.log(dog.name);

const student = {};
Object.defineProperties(student, {
  firstName: {
    value: '영희',
    writable: true,
    enumerable: true,
    configurable: true,
  },
  lastName: {
    value: '김',
    writable: true,
    enumerable: true,
    configurable: true,
  },
  fullName: {
    get() {
      return `${lastName} ${firstName}`;
    },
    set(name) {
      [this.lastName, this.firstName] = name.split(' ');
    },
    configurable: true,
  },
});
console.log(student);