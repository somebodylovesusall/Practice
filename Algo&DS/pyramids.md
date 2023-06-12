# Pyramids

## ❔
주어진 숫자만큼의 횟수로 로그 출력 ("#" + " " = `2 * n - 1`)
- 매개변수: `Number`
- 반환값: `undefined`

## ✔
이차원 배열처럼 변수 `row` & `col` 설정  
한 행에서 열의 중간 지점을 찾기 위하여 변수 `midpoint` 설정

## ❕
### iteration
- 변수 `midpoint`를 `Math.floor((2 * n - 1) / 2)`로 초기화
- 이중 `for` 반복문을 사용하여 변수 `level`을 빈 문자로 초기화
- 변수 `col`은 `2 * n - 1`까지 증가
- 변수 `col`이 `midpoint - row`보다 작거나 같고 `midpoint + row`보다 크거나 같으면 변수 `level`에 "#" 추가
- 변수 `col`이 `midpoint - row`보다 크거나 `midpoint + row`보다 작으면 변수 `level`에 " " 추가
- 변수 `row`가 `n`이 될 때까지 반복하여 로그 출력

### recursion
- 매개변수로 숫자 `n`, `row` 및 문자열 `level` 설정 (기본값: `row = 0`, `level = ""`)
- 변수 `midpoint`를 `Math.floor((2 * n - 1) / 2)`로 초기화
- 매개변수 `n`이 `row`와 같으면 종료
- 매개변수 `level`의 길이가 `2 * n - 1`과 같으면 로그 출력 및 매개변수 `row`를 1만큼 증가하여 재귀 호출
- 매개변수 `level`의 길이가 `midpoint - row`보다 작거나 같고 `midpoint + row`보다 크거나 같으면 변수 `add`에 "#" 할당
- 매개변수 `level`의 길이가 `midpoint - row`보다 크거나 `midpoint + row`보다 작으면 변수 `add`에 "#" 할당
- 매개변수 `level`에 변수 `add`를 추가하여 재귀 호출

## 💡
먼저 반복문을 작성하고 재귀문으로 리팩터링 (변수 초기화 및 매개변수 설정 등 판별)
