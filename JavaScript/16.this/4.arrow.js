const dog = {
  name : 'Dog',
  // Bad
  play : function () {
    console.log('멍멍');
  }
};
dog.play();
const obj = new dog.play(); // Bad
console.log(obj);

// ES6
const cat = {
  name : 'cat',
  play() {  // 객체의 메소드
    console.log('냐옹');
  },
};

cat.play();
// const obj1 = new cat.play();  // 생성자 함수로 사용 불가능

/**
 * 화살표 함수 (Arrow Function)
 * 1. 깔끔한 문법
 * 2. 생성자 함수로 사용 불가능 -> 무거운 Prototype을 만들지 않음
 * 3. 함수 자체 arguments를 만들지 않음
 * 4. Static Binding: 함수에서 제일 근접한 상위 범위의 this에 정적으로 바인딩
 */

function sum(a, b) {
  console.log(arguments);
}
sum(1, 2);

const add = (a, b) => {
  console.log(arguments); // 외부 arguments를 참조만 함
};
add(1, 2);

const printArrow = () => {
  console.log(this);
};
printArrow();
cat.printArrow = printArrow;
cat.printArrow();
