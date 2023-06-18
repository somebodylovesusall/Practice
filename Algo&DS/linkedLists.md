# Linked Lists

## ❔
단순 연결 리스트 생성  
클래스 `Node`와 `LinkedList` 내부에 기본 함수 구현 (*directions: linkedLists.html*)

## ✔️
각 함수별 *edge case*를 고려하여 함수 구현

## ❕
### class Node
- `constructor(data, next = null)`: 노드 값과 다음 노드 주소를 가지는 노드 생성

### class LinkedList
- `constructor()`: 연결 리스트 `head`의 기본값을 `null`로 초기화
- `insertFirst(data)`: 매개변수 `data`로 클래스 `Node`의 새로운 인스턴스 생성하여 연결 리스트 `head`로 지정 (node = data, next = this.head)
- `size()`: 변수 `count`를 0으로 초기화하고 노드를 다음 노드로 계속 이동하여 연결 리스트의 길이 반환
- `getFirst()`:
- `getLast()`:
- `clear()`:
- `removeFirst()`:
- `removeLast()`:
- `insertLast(data)`:
- `getAt(index)`:
- `removeAt(index)`:
- `insertAt(data, index)`:

## 💡
기본 함수를 구현하며 단순 연결 리스트의 작동 원리 이해  
특정한 함수보다 포괄적인 함수로 리팩터링 가능
