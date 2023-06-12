# Vowels

## ❔
주어진 문자열에 대한 모음 개수 계산
- 매개변수 : `String`
- 반환값: `Number`

## ✔️
case insensitive를 위하여 `toLowerCase` 함수 사용  
`match` 함수에 정규표현식 사용

## ❕
### includes method
- 모음 개수를 계산하기 위한 변수 `count`를 0으로 초기화
- 배열 `vowelArr`를 다섯 개의 모음으로 초기화 (문자열이 아닌 배열로 각각의 모음 요소를 설정)
- `for of` 반복문에서 case insensitive를 위하여 `toLowerCase` 함수를 사용하여 매개변수 `str`을 소문자로 변환
- `includes` 함수를 사용하여 변수 `char`가 배열 `vowelArr`에 포함되면 변수 `count`를 1만큼 증가
- 변수 `count` 반환

### regular expression
- `match` 함수를 사용하여 매개변수 `str`에 포함된 모음 문자들을 배열 `vowelMatchArr`의 요소로 저장
- 배열 `vowelMatchArr`의 요소가 있으면 배열의 길이를 반환하고 `null`이면 0을 반환

## 💡
내장함수  
- `includes(searchElement)`: 문자열이나 배열이 찾고자 하는 값을 포함하면 `true`를 반환하고 포함하지 않으면 `false`를 반환
- `match(regexp)`: 문자열이 정규표현식과 일치하면 일치하는 전체 문자열을 첫 번째 요소로 포함하는 배열을 반환하고 일치하는 것이 없으면 `null`을 반환  

정규표현식
- `/g`: 정규표현식과 일치하는 모든 요소 탐색 (multiple 허용) 
- `/i`: case insensitive
