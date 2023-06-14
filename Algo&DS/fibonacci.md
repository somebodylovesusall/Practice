# Fibonacci

## ❔
피보나치 수열에서 주어진 숫자에 해당하는 순서 출력
- 매개변수: `Number`
- 반환값: `Number`

## ✔️
처음 두 개의 숫자에 대한 초기값을 미리 지정  
Runtime Complexity: iteration vs recursion

## ❕
### iteration: variables

### iteration: array

### recursion

### memoization

## 💡
Runtime Complexity: iteration < recursion  
to decrease runtime complexity... memoization!
- 동일한 `arguments`로 호출한 함수의 결과값을 별도로 저장하여 이중 호출 방지
- 원래 `fib` 함수에서 `return` 문의 `fib` 함수는 memoization version
- apply method: 
