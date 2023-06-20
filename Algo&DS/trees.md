# Trees

## ❔
클래스 `Node` 내부에 `constructor`, `add`, `remove` 함수 구현  
클래스 `Tree` 내부에 `constructor`, `traverseBF`, traverseDF` 함수 구현
- `traverseBF(fn)`: 넓이 우선 순회 수행
- `traverseDF(fn)`: 깊이 우선 순회 수행

## ✔️
Tree Traversal
- Breadth-first Traversal(BFT): 넓이 우선 순회는 `root`부터 각 `level`을 순차적으로 순회
- Depth-first Traversal(DFT): 깊이 우선 순회는 `root`부터 각 `children`의 `branch`에서 가장 깊은 `bottom`까지 순회

## ❕
### class Node

### class Tree

### 

## 💡
트리의 핵심은 순회 방식에 대한 응용 (BFT vs DFT)  
내장함수
- `filter(callbackFn)`: 배열의 요소를 순회하며 `callback` 함수의 조건에 만족하는 요소들을 추출하여 새로운 배열로 반환 (원본 배열은 그대로)
