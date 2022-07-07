// static: 정적 property, method
class Fruit {
  static MAX_FRUITS = 4;
  // 생성자: new 키워드로 객체를 생성할 때 호출되는 함수
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }

  // 클래스 레벨 메소드
  static makeRandomFruit() {
    // 클래스 레벨의 메소드에서는 this를 참조할 수 없음
    return new Fruit('banana', '🍌');
  }

  // 인스턴스 레벨 메소드
  display = () => {
    console.log(`${this.name} : ${this.emoji}`)
  };
}

const banana = Fruit.makeRandomFruit();
console.log(banana);
console.log(Fruit.MAX_FRUITS);

// apple과 orange는 Fruit 클래스의 인스턴스
const apple = new Fruit('apple', '🍎');
const orange = new Fruit('orange', '🍊');

console.log(apple);
console.log(orange);
console.log(apple.name);
console.log(apple.emoji);
apple.display();