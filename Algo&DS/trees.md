# Trees

## ❔
클래스 `Node` 내부에 `constructor`, `add`, `remove` 함수 구현  
클래스 `Tree` 내부에 `constructor`, `traverseBF`, `traverseDF` 함수 구현

## ✔️
**Tree Traversal**
- Breadth-first Traversal(BFT): `root`부터 각 `level`을 순차적으로 순회
- Depth-first Traversal(DFT): `root`부터 각 `children`의 `branch`에서 가장 깊은 `bottom`까지 순회

## ❕
### class Node
- `constructor(data)`: 트리 값과 자식 요소를 가지는 노드 생성
- `add(data)`: 매개변수 `data`를 전달받아 새로운 노드를 생성하여 자식 요소로 삽입
- `remove(data)`: `filter` 함수를 사용하여 자식 요소들 중 매개변수 `data`와 같은 요소를 제거

### class Tree
- `constructor()`: `root`가 `null`로 초기화된 트리 생성
- `traverseBF(fn)`: 넓이 우선 순회 수행
  - 
- `traverseDF(fn)`: 깊이 우선 순회 수행
  - 

## 💡
트리의 핵심은 순회 방식에 대한 응용 (BFT vs DFT)  
내장함수
- `filter(callbackFn)`: 배열의 요소를 순회하며 `callback` 함수의 조건에 만족하는 요소들을 추출하여 새로운 배열 반환 (원본 배열은 그대로)
