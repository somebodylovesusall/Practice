// class Tiger {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log('eat!');
//   }
//   sleep() {
//     console.log('sleep!');
//   }
// }

// class Dog {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log('eat!');
//   }
//   sleep() {
//     console.log('sleep!');
//   }
//   play() {
//     console.log('play!');
//   }
// }

class Animal {
  constructor(color) {
    this.color = color;
  }
  eat() {
    console.log('eat!');
  }
  sleep() {
    console.log('sleep!');
  }
}

class Tiger extends Animal {}
const tiger = new Tiger('yellow');
console.log(tiger);
tiger.eat();
tiger.sleep();

class Dog extends Animal {
  constructor(color, owner) {
    super(color);
    this.owner = owner;
  }

  // 오버라이딩 (Overriding)
  eat() {
    super.eat();
    console.log('A dog is eating something.');
  }
  play() {
    console.log('play!');
  }
}
const dog = new Dog('brown', 'Ellie');
console.log(dog);
dog.eat();
dog.sleep();
dog.play();