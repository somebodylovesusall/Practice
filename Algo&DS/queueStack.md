# Queue Stack

## ❔
두 개의 스택으로부터 하나의 새로운 큐 생성  
클래스 `Stack`과 `Queue` 내부에 아래 함수 구현  
- `class Stack {}`: `constructor()`, `push(element)`, `pop()`, `peek()`
- `class Queue {}`: `constructor()`, `add(element)`, `remove()`, `peek()`

## ✔️
클래스 `Queue`에 빈 배열을 초기화하지 않고 클래스 `Stack`의 인스턴스 생성

## ❕
### class Stack
- `constructor()`: 빈 배열로 초기화
- `push(element)`: `push` 함수를 사용하여 매개변수 `element`를 스택의 마지막 요소로 삽입
- `pop()`: `pop` 함수를 사용하여 스택의 마지막 요소를 반환하고 제거
- `peek()`: 스택의 마지막 요소를 반환하고 유지

### class Queue
- `constructor()`: 클래스 `Stack`의 인스턴스 `stackOne`, `stackTwo` 생성
- `add(element)`: `push` 함수를 사용하여 매개변수 `element`를 인스턴스 `stackOne`의 마지막 요소로 삽입
- `remove()`:
  - `while` 반복문에서 인스턴스 `stackOne`의 `peek` 함수를 사용하여 배열의 요소가 남아있는지 확인 후 인스턴스 `stackTwo`에 `stackOne`의 역순으로 요소 삽입
  - **`pop` 함수를 사용하여** 인스턴스 `stackTwo`의 마지막 요소를 변수 `top`에 할당하고 제거
  - `while` 반복문에서 인스턴스 `stackTwo`의 `peek` 함수를 사용하여 배열의 요소가 남아있는지 확인 후 원래 인스턴스 `stackOne` 복구
  - 변수 `top` 반환
- `peek()`:
  - `while` 반복문에서 인스턴스 `stackOne`의 `peek` 함수를 사용하여 배열의 요소가 남아있는지 확인 후 인스턴스 `stackTwo`에 `stackOne`의 역순으로 요소 삽입
  - **`peek` 함수를 사용하여** 인스턴스 `stackTwo`의 마지막 요소를 변수 `top`에 할당하고 유지
  - `while` 반복문에서 인스턴스 `stackTwo`의 `peek` 함수를 사용하여 배열의 요소가 남아있는지 확인 후 원래 인스턴스 `stackOne` 복구
  - 변수 `top` 반환

## 💡
실제 상황에서 이러한 방식으로 스택과 큐를 구현하지는 않겠지만 작동 원리에 대한 이해 필요  
스택과 역순의 스택을 차례로 비우고 채우는 일의 연속
