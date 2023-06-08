# Practice

## Algorithm & Data Structure

### String Reversal

#### ❔

주어진 문자열에 대한 역순의 문자열 생성 (매개변수: String, 반환값: String)

#### ✔️

문자열과 배열을 서로 자유롭게 변환하는 함수 사용 (split, join 함수)

#### ❕

- for loop: 배열의 길이부터 시작하여 0으로 감소한 후 새로운 배열에 push 함수를 사용하여 맨 뒤에 요소 삽입
- forEach method: forEach 함수로 반복한 후 unshift 함수를 사용하여 맨 앞에 요소 삽입
- reverse method: 가장 간단한 방법으로 문자열 -> 배열 -> 역순 정렬 -> 문자열로 변환
- for of loop: reverse 함수를 사용하지 않고 문자열 reversedStr을 초기화하여 맨 앞에 새로운 문자 char를 누적
- reduce method: 직관적이지 않지만 reduce 함수를 사용하여 callback 함수의 매개변수: accumulator, currentValue와 초기값: initialValue를 설정

#### 💡

- 내장 함수(reverse, reduce 함수)의 적절한 사용으로 간단히 문제 해결이 가능
- for 반목문은 가급적이면 사용 자제

### Palindromes

#### ❔

주어진 문자열에 대한 역순의 동일한 문자열 판별 (매개변수: String, 반환값: Boolean)

#### ✔️

문자열과 배열을 서로 자유롭게 변환하는 함수 사용 (split, join 함수)

#### ❕

- for loop: 불리언 isPalindrome을 false로 초기화하고 if 조건문에서 문자열의 첫 문자와 마지막 문자를 비교
- forEach method: forEach 함수로 반복한 후 unshift 함수를 사용하여 맨 앞에 요소 삽입 후 비교
- reverse method: 가장 간단한 방법으로 문자열 -> 배열 -> 역순 정렬 -> 문자열로 변환하여 비교
- every method: every 함수를 사용하여 조건을 모두 만족하면 true 반환

#### 💡

- for 반복문과 every 함수는 불필요하게 이중 비교 수행
- for 반복문은 가급적이면 사용 자제

### Integer Reversal

#### ❔

주어진 숫자에 대한 역순의 숫자 생성 + 부호는 그대로 유지 (매개변수: Number, 반환값: Number)

#### ✔️

문자열과 숫자의 형변환 함수 사용 (toString, Number 함수)

#### ❕

- forEach method: forEach 함수로 반복한 후 unshift 함수를 사용하여 맨 앞에 요소 삽입 후 음수일 때 (-) 부호 해결
- reverse method: forEach 함수 대신 reverse 함수를 사용
- parseInt & Math.sign method: parseInt 함수로 정수 형변환 후 Math.sign 함수로 부호 결정 (양수: 1, 음수: -1)

#### 💡

- 다양한 형변환 함수 (toString, Number, parseInt, Math.sign)

### Max Chars

#### ❔

주어진 문자열에 대한 역순의 문자열 생성 (매개변수: String, 반환값: String)

#### ✔️

문자열과 배열을 서로 자유롭게 변환하는 함수 사용 (split, join 함수)

#### ❕

- for loop: 배열의 길이부터 시작하여 0으로 감소한 후 새로운 배열에 push 함수를 사용하여 맨 뒤에 요소 삽입
- forEach method: forEach로 반복한 후 unshift 함수를 사용하여 맨 앞에 요소 삽입
- reverse method: 가장 간단한 방법으로 문자열 -> 배열 -> 역순 정렬 -> 문자열로 변환
- for of loop: reverse 함수를 사용하지 않고 reversedStr을 초기화하여 맨 앞에 새로운 char를 누적
- reduce method: 직관적이지 않지만 reduce 함수를 사용하여 callback 함수의 매개변수: accumulator, currentValue와 초기값: initialValue를 설정

#### 💡

- 내장 함수(reverse, reduce 함수)를 적절하게 사용하여 간단한 문제 해결이 가능
- for loop는 가급적이면 사용 자제

## JavaScript
