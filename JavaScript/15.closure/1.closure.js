const text = 'Hello';
function func() {
  console.log(text);
}
func();

function outer() {
  const x = 0;
  function inner() {
    console.log(`inside inner: ${x}`);
  }
  return inner;
}
const func1 = outer();
func1();

// 캡슐화 & 정보 은닉: 내부 정보를 은닉하고 public 함수를 통한 데이터 조작을 위해 사용
// 클래스의 private 필드 또는 메소드를 사용하는 효과와 동일
function makeCounter() {
  let count = 0;
  function increase() {
    count++;
    console.log(count);
  }
  return increase;
}

const increase = makeCounter();
increase();
increase();
increase();

class Counter {
  #count = 0;
  increase() {
    this.#count++;
    console.log(this.#count);
  }
}
const counter = new Counter();
counter.increase();