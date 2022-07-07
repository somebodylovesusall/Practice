// 객체를 생성할 수 있는 템플릿
// 1. 생성자 (Constructor)
// 2. 클래스 (Class) 

// 클래스
class Fruit {
  // 생성자: new 키워드로 객체를 생성할 때 호출되는 함수
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }

  display = () => {
    console.log(`${this.name} : ${this.emoji}`)
  };
}

// apple과 orange는 Fruit 클래스의 인스턴스
const apple = new Fruit('apple', '🍎');
const orange = new Fruit('orange', '🍊');

console.log(apple);
console.log(orange);
console.log(apple.name);
console.log(apple.emoji);
apple.display();