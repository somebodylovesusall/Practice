# String Reversal

## ❔
주어진 문자열에 대한 역순의 문자열 생성
- 매개변수: String
- 반환값: String

## ✔️
문자열과 배열을 자유롭게 변환하는 split, join 함수 사용

## ❕
### push method
- for 반복문 조건식을 배열의 길이로 초기화하고 0까지 차례로 -1씩 감소
- 새로운 배열 reversedArr에 push 함수를 사용하여 맨 뒤에 요소 삽입

### unshift method
- forEach 함수로 배열 arr 요소를 차례로 순회
- 새로운 배열 reversedArr에 unshift 함수를 사용하여 맨 앞에 요소 삽입

### reverse method
- 문자열 -> 배열 -> 역순 정렬 -> 문자열

### for of loop
- reverse 함수를 사용하지 않고 문자열 reversedStr을 초기화하여 맨 앞에 새로운 문자 char를 누적

### reduce method
- reduce 함수를 사용하여 callback 함수의 매개변수 reversedStr, char 및 초기값 ""를 설정

## 💡
내장 함수를 적절하게 사용하여 간단한 문제 해결이 가능
- reverse(): 주어진 배열을 역순으로 정렬
- reduce(callbackFn, initialValue): 초기값에 callback 함수의 결과값을 누산
