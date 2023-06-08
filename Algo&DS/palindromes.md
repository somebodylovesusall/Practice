# Palindromes

## ❔

주어진 문자열에 대한 역순의 동일한 문자열 판별 (매개변수: String, 반환값: Boolean)

## ✔️

문자열과 배열을 서로 자유롭게 변환하는 함수 사용 (split, join 함수)

## ❕

- for loop: 불리언 isPalindrome을 false로 초기화하고 if 조건문에서 문자열의 첫 문자와 마지막 문자를 비교
- forEach method: forEach 함수로 반복한 후 unshift 함수를 사용하여 맨 앞에 요소 삽입 후 비교
- reverse method: 가장 간단한 방법으로 문자열 -> 배열 -> 역순 정렬 -> 문자열로 변환하여 비교
- every method: every 함수를 사용하여 조건을 모두 만족하면 true 반환

## 💡

- for 반복문과 every 함수는 불필요하게 이중 비교 수행
- for 반복문은 가급적이면 사용 자제
