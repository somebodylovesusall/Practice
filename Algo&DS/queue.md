# Queue
**FIFO (First In First Out)**

## ❔
클래스 `Queue` 내부에 `constructor`, `add`, `remove`, `peek` 함수 구현  
`remove` 함수는 마지막 요소를 반환하고 제거하지만 `peek` 함수는 마지막 요소를 반환하고 유지  
`weave` 함수 구현 시 매개변수 배열 `sourceOne`, `sourceTwo`의 요소를 *교차*하여 새로운 큐에 삽입

## ✔️
배열에 직접 접근하지 않고 클래스의 함수를 통하여 큐를 수동적으로 조작

## ❕
### class Queue
- `constructor()`: 빈 배열로 초기화
- `add(element)`: `unshift` 함수를 사용하여 매개변수 `element`를 큐의 처음 요소로 삽입
- `remove()`: `pop` 함수를 사용하여 큐의 마지막 요소를 반환하고 제거
- `peek()`: 큐의 마지막 요소를 반환하고 유지

### function weave
- 매개변수로 배열 `sourceOne`, `sourceTwo`를 전달
- 클래스 `Queue`의 인스턴스 `queue` 생성
- `while` 반복문에서 `peek` 함수를 사용하여 각 배열에서 요소가 남아있는지 확인
- 교차 삽입을 위하여 각 배열마다 `if` 조건문을 별도로 사용
- 각 배열의 요소가 남아있으면 인스턴스 `queue`에 각 배열의 마지막 요소를 반환하여 추가

## 💡
성능 향상을 위하여 큐를 배열처럼 다루고 싶지 않은 경우 의도적으로 직접 구현  
queue : array equivalent  
- add to queue -> `array.unshift(element0, element1, /* … ,*/ elementN);`
- remove from queue -> `array.pop();`
