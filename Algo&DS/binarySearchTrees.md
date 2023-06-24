# Binary Search Trees

## ❔
클래스 `Node` 내부에 `constructor`, `insert`, `contains` 함수 구현  
이진 탐색 트리 여부를 판단하는 `validate` 함수 구현

## ✔️
이진 탐색 트리의 조건
- 두 개의 자식 노드를 보유
- 왼쪽 자식 노드 < 부모 노드 && 부모 노드 < 오른쪽 자식 노드
  
## ❕
### class Node
- `constructor(data)`:
- `insert(data)`:
- `contains(data)`:

### function validate
- 

## 💡
부모 노드와 자식 노드간 대소 비교가 핵심이며 중위 순회 수행
이진 탐색 트리 여부를 판단하는 `validate` 함수에서 `recursion` 사용
