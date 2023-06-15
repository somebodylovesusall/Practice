# Queue
**FIFO (First In First Out)**

## ❔
클래스 `Queue` 내부에 `constructor`, `add`, `remove`, `peek` 함수 구현  
- `constructor()`: 빈 배열로 초기화
- `add(element)`: 매개변수 `element`를 큐의 처음 요소로 삽입
- `remove()`: 큐의 마지막 요소를 반환하고 제거
- `peek()`: 큐의 마지막 요소를 반환하고 유지
`weave` 함수 구현
- 매개변수 배열 `source1`, `source2`의 요소를 *교차*하여 새로운 큐애 삽입

## ✔️
배열에 직접 접근하지 않고 클래스의 함수를 통하여 `queue`를 수동적으로 조작

## ❕
### class Queue
- 

### weave method

## 💡
queue : array equivalent  
- add to queue -> array.unshift();
- remove from queue -> array.pop();  

purposeful queue
- 자바스크립트 자체적으로 몇 가지 자료구조들이 내장되어 있으나 성능 향상을 위하여 큐를 배열처럼 다루고 싶지 않은 경우 직접 구현
