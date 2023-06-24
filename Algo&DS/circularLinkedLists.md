# Circular Linked Lists

## ❔
원형 연결 리스트 생성  
기존에 구현한 클래스 `Node`와 `LinkedList`를 바탕으로 아래 함수 구현
- `midpoint(list)`: 매개변수 `list`를 전달받아 가운데 노드 반환
- `circular(list)`: 매개변수 `list`를 전달받아 원형 연결 리스트 판별
- `tail(list, n)`: 매개변수 `list`, `n`을 전달받아 마지막 노드로부터 `n`번째 노드 반환

## ✔️
별도의 변수 `slow`와 `fast`로 노드를 순회하며 포인터 이동

## ❕
### function midpoint
- 연결 리스트의 노드 개수가 홀수면 전체 노드 중 가운데 노드를 반환하고 짝수면 전체 노드를 절반으로 나누어 앞에서 마지막 노드를 반환
- 변수 `slow`와 `fast`는 모두 처음 노드로 초기화
- `while` 반복문에서 `fast`의 다음 노드와 다다음 노드가 존재하는 동안 전체 노드를 순회하며 `slow`는 다음 노드로 `fast`는 다다음 노드로 이동
- `fast`가 마지막 노드 또는 마지막 노드 바로 이전 노드가 되면 `midpoint` 노드를 가리키는 `slow`를 반환

### function circular
- 단순 연결 리스트는 마지막 노드의 `node.next`가 `null`이지만 원형 연결 리스트는 `node.next`가 `null`인 노드가 없으므로 무한 루프 발생이 가능
- 변수 `slow`와 `fast`는 모두 처음 노드로 초기화
- `while` 반복문에서 `fast`의 다음 노드와 다다음 노드가 존재하는 동안 전체 노드를 순회하며 `slow`는 다음 노드로 `fast`는 다다음 노드로 이동
- `if` 조건문에서 `fast`와 `slow`가 가리키는 노드가 같아지면 `true`를 반환

### function tail
- 변수 `slow`와 `fast`는 모두 처음 노드로 초기화
- `while` 반복문에서 매개변수 `n`만큼 `fast`를 이동
- `while` 반복문에서 `fast`의 다음 노드가 존재하는 동안 `slow`와 `fast`를 다음 노드로 이동
- `fast`가 마지막 노드가 되면 마지막 노드로부터 매개변수 `n`만큼 떨어진 `slow`를 반환

## 💡
포인터를 별도로 지정하여 연결 리스트의 다양한 응용 케이스들을 처리 가능
