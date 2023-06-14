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
- 
- 

### iteration: array
- 처음 두 개의 숫자 0, 1을 배열 `fibArr`에 미리 지정
- `for` 반복문에서 배열 

### recursion
- 

### memoization
- 

## 💡
Runtime Complexity: iteration < recursion  
to decrease runtime complexity... memoization!
- 동일한 `arguments`로 호출한 함수의 결과값을 별도로 저장하여 이중 호출 방지
- 원래 `fib` 함수에서 `return` 문의 `fib` 함수는 memoization version
- `func.apply(thisArg, [argsArray])`: 주어진 `this` 값과 배열 또는 유사 배열 객체로 제공되는 `arguments`로 함수 호출 
