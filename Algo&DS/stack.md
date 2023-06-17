# Stack
**LIFO (Last In First Out)**

## ❔
클래스 `Stack` 내부에 `constructor`, `add`, `remove`, `peek` 함수 구현  
`remove` 함수는 마지막 요소를 반환하고 제거하지만 `peek` 함수는 마지막 요소를 반환하고 유지

## ✔️
배열에 직접 접근하지 않고 클래스의 함수를 통하여 스택을 수동적으로 조작

## ❕
### class Stack
- `constructor()`: 빈 배열로 초기화
- `add(element)`: `push` 함수를 사용하여 매개변수 `element`를 스택의 마지막 요소로 삽입
- `remove()`: `pop` 함수를 사용하여 스택의 마지막 요소를 반환하고 제거
- `peek()`: 스택의 마지막 요소를 반환하고 유지

## 💡
큐와 유사하지만 출력 순서가 다름을 기억  
stack : array equivalent
- add to stack -> `array.push(element0, element1, /* … ,*/ elementN);`
- remove from stack -> `array.pop();`
