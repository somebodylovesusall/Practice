# Matrix Spirals

## ❔
주어진 숫자만큼의 정사각형 행렬 배열 생성 (`n x n`)  
하위 배열의 각 요소는 시계 방향으로 1부터 `n^2`까지 1만큼 증가  
- 매개변수: `Number`
- 반환값: `array`

## ✔️
변수 `startRow`, `startCol`, `endRow`, `endCol` 설정  
배열 `matrixArr`을 초기화하고 그 안에 빈 배열 `[]`을 매개변수 `n`만큼 삽입 (`n === 3: [[], [], []]`)

## ❕
### variable rows & columns
- 상위 배열 `matrixArr`을 초기화하여 매개변수 `n`만큼 하위 배열을 미리 생성
- 변수 `count`를 1로 초기화하여 1만큼 증가
- 변수 `startRow`, `startCol`은 0으로 초기화하고 변수 `endRow`, `endCol`은 `n - 1`로 초기화
- 변수 `startRow`가 `endRow`보다 작거나 같고 변수 `startCol`이 `endCol`보다 작거나 같은 동안 `while` 반복문 작동
- 시작 행의 요소들을 삽입하기 위하여 `for` 반복문 작동 후 변수 `startRow`를 1만큼 증가
- 마지막 열의 요소들을 삽입하기 위하여 `for` 반복문 작동 후 변수 `endCol`을 1만큼 감소
- 마지막 행의 요소들을 삽입하기 위하여 `for` 반복문 작동 후 변수 `endRow`를 1만큼 감소
- 나머지 요소들을 삽입하기 위하여 `for` 반복문 작동 후 변수 `startCol`을 1만큼 증가

## 💡
- 배열에 인덱스를 지정하여 요소 삽입 가능 (초기화되지 않은 요소들은 `null` 처리)
- 깔끔하게 풀고 싶어도 지저분한 문제를 지저분하게 푸는 것도 하나의 방법
