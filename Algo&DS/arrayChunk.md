# Array Chunk

## ❔
주어진 배열로 주어진 숫자만큼의 요소를 가지는 하위 배열 생성
- 매개변수: array, Number
- 반환값: array

## ✔️
매개변수 중 숫자는 이차원 배열 각 행에서 열의 개수를 의미  
주어진 배열에서 마지막으로 남는 요소는 열의 개수와 관계없이 하위 배열로 생성

## ❕
### main & sub arrays
- 별도의 상하위 배열 mainArr, subArr 초기화
- 하위 배열 크기와 변수 size를 비교하여 같으면 하위 배열을 상위 배열에 삽입 후 빈 배열로 변경
- 마지막 남는 하위 배열을 상위 배열에 삽입

### chunked & unchunked arrays
- 상위 배열 chunkedArr 초기화
- for of 반복문에서 마지막 하위 배열 last 초기화
- 하위 배열 last의 null 여부와 크기 확인 후 상위 배열 chunkedArr에 삽입

### slice method
- while 반복문에서 변수 index를 변수 size만큼 증가
- slice 함수를 사용하여 시작 index와 끝 index 직전까지 요소로 하위 배열 반환

## 💡
상위 배열에 하위 배열을 생성하며 동시에 삽입이 가능  
내장 함수를 적절하게 사용하여 간단한 문제 해결이 가능
- slice([begin[, end]]): 시작 index부터 끝 index 직전 요소까지 자른 배열 반환
