function Dog(name, emoji) {
  this.name = name;
  this.emoji = emoji;
  // 인스턴스 레벨 함수
 /* this.printName = () => {
    console.log(`${this.name} ${this.emoji}`);
  }; */
}

// 프로토타입 레벨 함수
Dog.prototype.printName = function () {
  console.log(`${this.name} ${this.emoji}`);
};
const dog1 = new Dog('뭉치', '🐶');
const dog2 = new Dog('코코', '🦮');
console.log(dog1, dog2);
dog1.printName();
dog2.printName();

// 인스턴스(자식) 레벨에서 동일한 이름으로 함수를 재정의하면 (Overriding)
// 프로토타입(부모) 레벨의 함수 속성은 가려짐 (Shadowing)
dog1.printName = function () {
  console.log('안녕!');
}
dog1.printName();

// 정적 레벨
Dog.hello = () => {
  console.log('Hello!');
};
Dog.hello();
Dog.MAX_AGE = 20;