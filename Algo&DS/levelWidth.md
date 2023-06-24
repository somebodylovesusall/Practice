# Level Width

## ❔
기존에 구현한 클래스 `Node`를 바탕으로 주어진 트리에서 각 레벨의 노드 수를 구하는 `levelWidth` 함수 구현
- 매개변수: 배열
- 반환값: 배열

## ✔️
배열의 요소로 `"stop"`을 설정한 후 이동하여 각 레벨의 노드 수 측정  
배열의 요소로 `"stop"`만 남을 경우 반복문 종료

## ❕
### function levelWidth
- 트리를 매개변수 `root`로 전달받고 배열 `arr`은 `root`, `"stop"`으로 배열 `count`는 0으로 초기화
- `while` 반복문에서 배열 `arr`에 `"stop"`만 남지 않을 때까지 트리 노드를 순회
- 배열 `arr`의 처음 요소를 변수 `node`에 저장하고 `if` 조건문에서 각 레벨의 모든 노드 순회 여부를 판단
- `node`와 `"stop"`이 같으면 배열 `count`에 0을 삽입하고 배열 `arr`에 `"stop"`을 삽입 
- `node`와 `"stop"`이 같지 않으면 배열 `arr`에 `node`의 자식을 삽입하고 배열 `count`에서 현재 작업 요소를 1만큼 증가

## 💡
Breadth-first Traversal(BFT)과의 차이점
- 각 레벨을 순회하며 노드 수를 구하기 위한 별도의 배열 `count` 설정
- 각 레벨의 모든 노드 순회 여부를 판단하기 위한 지표 `"stop"` 설정
