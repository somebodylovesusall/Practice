# Queue
**FIFO (First In First Out)**

## ❔
클래스 `Queue` 내부에 `constructor`, `add`, `remove`, `peek` 함수 구현  
`weave` 함수 구현 시 매개변수 배열 `source1`, `source2`의 요소를 *교차*하여 새로운 큐애 삽입

## ✔️
배열에 직접 접근하지 않고 클래스의 함수를 통하여 `queue`를 수동적으로 조작

## ❕
### class Queue
- `constructor()`: 빈 배열로 초기화
- `add(element)`: `unshift` 함수를 사용하여 매개변수 `element`를 큐의 처음 요소로 삽입
- `remove()`: `pop` 함수를 사용하여 큐의 마지막 요소를 반환하고 제거
- `peek()`: 큐의 마지막 요소를 반환하고 유지

### weave method

## 💡
성능 향상을 위하여 큐를 배열처럼 다루고 싶지 않은 경우 의도적으로 직접 구현  
queue : array equivalent  
- add to queue -> array.unshift();
- remove from queue -> array.pop();
