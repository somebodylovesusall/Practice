# Linked Lists

## ❔
단순 연결 리스트 생성  
클래스 `Node`와 `LinkedList` 내부에 기본 함수 구현 (*directions: linkedLists.html*)

## ✔️
함수별 *edge case*를 고려하여 함수 구현

## ❕
### class Node
- `constructor(data, next = null)`: 노드 값과 다음 노드 주소를 가지는 노드 생성

### class LinkedList
- `constructor()`: `head` 값이 `null`로 초기화된 연결 리스트 생성
- `insertFirst(data)`: 연결 리스트의 처음 노드 삽입
  - 매개변수 `data`로 클래스 `Node`의 새로운 인스턴스를 생성
  - `node`에 data를 `next`에 `this.head`를 할당
- `size()`: 연결 리스트의 길이 반환
  - 변수 `count`를 0으로 초기화
  - `while` 반복문에서 노드를 순회하며 변수 `count`를 증가
- `getFirst()`: 연결 리스트의 처음 노드 반환
- `getLast()`: 연결 리스트의 마지막 노드 반환
  - 연결 리스트의 `head` 값이 없으면 `null`을 반환
  - `while` 반복문으로 노드를 순회하며 `if` 조건문에서 `node.next`가 값이 없으면 `node`를 반환
- `clear()`: 연결 리스트의 모든 노드 제거
- `removeFirst()`: 연결 리스트의 처음 노드 제거
  - 연결 리스트의 `head` 값이 없으면 함수 종료
  - 처음 노드가 가리키는 다음 노드를 연결 리스트의 `head`에 저장
- `removeLast()`: 연결 리스트의 마지막 노드 제거
  - 연결 리스트의 `head` 값이 없으면 함수 종료
  - 연결 리스트의 처음 노드가 가리키는 다음 노드가 없으면 `head`를 null로 할당하고 함수 종료
  - 변수 `prev`를 `head`로 `node`를 처음 노드의 다음 노드로 초기화
  - `while` 반복문에서 노드를 순회하며 변수 `prev`와 `node`를 재할당
  - `prev.next`를 `null`로 할당
- `insertLast(data)`: 연결 리스트의 마지막 노드 삽입
  - 변수 `last`를 마지막 노드로 초기화
  - 마지막 노드가 있으면 새로운 노드를 생성하여 그 뒤에 삽입하고 없으면 `head`에 삽입
- `getAt(index)`: 연결 리스트의 특정 인덱스 노드 반환
  - 변수 `count`를 0으로 `node`를 `head`로 초기화
  - `while` 반복문으로 노드를 순회하며 `if 조건문에서 `count`가 `index`와 같으면 특정 노드를 반환
  - 연결 리스트의 `head` 값이 없거나 `index out of bounds`의 경우 `null`을 반환
- `removeAt(index)`: 연결 리스트의 특정 인덱스 노드 제거
  - 연결 리스트의 `head` 값이 없으면 함수 종료
  - 매개변수 `index`가 0이면 처음 노드를 제거
  - 변수 `prev`를 `index - 1` 노드로 초기화
  - `prev` 노드가 없거나 `prev` 다음 노드가 없으면 함수 종료
  - `prev.next`를 `prev` 다음 다음 노드로 할당
- `insertAt(data, index)`: 연결 리스트의 특정 인덱스 노드 삽입
  - 연결 리스트의 `head` 값이 없으면 새로운 노드를 생성하여 `head`에 할당
  - 매개변수 `index`가 0이면 처음 노드로 삽입
  - 변수 `prev`를 `index - 1`로 초기화하거나 값이 없으면 마지막 노드로 초기화
  - 새로운 노드를 생성하여 `prev.next`에 할당

## 💡
기본 함수를 구현하며 단순 연결 리스트의 작동 원리 이해  
특정한 함수보다 포괄적인 함수로 리팩터링 가능
