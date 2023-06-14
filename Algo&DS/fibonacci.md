# Fibonacci

## ❔
피보나치 수열에서 주어진 숫자에 해당하는 순서 출력
- 매개변수: `Number`
- 반환값: `Number`

## ✔️
처음 두 개의 숫자 0, 1에 대하여 초기값으로 미리 지정  
Runtime Complexity: iteration vs recursion

## ❕
### iteration: variables
- 변수 `num1`, `num2`를 각각 0, 1로 초기화
- 변수 `sum`은 0으로 초기화하고 `num1 + num2` 값으로 `while` 반복문에서 변경
- 변수 `count`를 1만큼 매개변수 `n` 이전까지 증가

### iteration: array
- 처음 두 개의 숫자 0, 1을 배열 `fibArr`의 요소로 미리 지정
- `for` 반복문에서 피보나치 수열의 순서로 배열 `fibArr`에 요소를 추가

### recursion
- `if` 조건문에서 매개변수 `n`이 2보다 작으면 `n`을 그대로 반환
- 매개변수 `n`이 2보다 작아지는 순간까지 `fib3(n - 2)`와 `fib3(n - 1)` 함수를 재귀 호출

### memoization
- 이전 호출 함수의 결과값을 저장할 객체 `cacheObj` 생성
- `return` 문의 함수에서 `arguments` 개수를 모르므로 `Spread` 연산자 사용
- 객체 `cacheObj`에 이전 호출 함수의 결과값이 저장되어 있을 때 그대로 반환
- `apply` 함수를 사용하여 새로운 결과값 저장

## 💡
Runtime Complexity: iteration < recursion  
to decrease runtime complexity... memoization!
- 동일한 `arguments`로 호출한 함수의 결과값을 별도로 저장하여 이중 호출 방지
- 원래 `fib` 함수에서 `return` 문의 `fib` 함수는 memoization version
- `func.apply(thisArg, [argsArray])`: 주어진 `this` 값과 배열 또는 유사 배열 객체로 제공되는 `arguments`로 함수 호출 
