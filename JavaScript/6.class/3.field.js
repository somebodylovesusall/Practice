// 접근 제어자 (Access Modifier) -> 캡슐화 (Encapsulation)
// private(#), public(default), protected

class Fruit {
  #name;
  #emoji;
  #type = 'fruit';
  constructor(name, emoji) {
    this.#name = name;
    this.#emoji = emoji;
  }
  #display = () => {
    console.log(`${this.#name} : ${this.#emoji}`)
  };
}

const apple = new Fruit('apple', '🍎');
// apple.#name = '사과';   // #field는 외부에서 접근 불가능
// apple.#display();
console.log(apple);