# Max Chars

## ❔
주어진 문자열에 대한 최빈 문자 판별
- 매개변수: String
- 반환값: String

## ✔️
객체의 key를 최빈 문자로 value를 빈도로 설정 {char : frequency}
객체의 value가 null인 경우와 아닌 경우를 구별

## ❕
### maxCount array
- 배열 maxCount에서 value만 별도 저장
- max 함수를 사용하여 배열 maxCount의 최댓값 저장
- Spread 연산자로 배열 maxCount 요소 열거
- Object.keys 함수를 사용하여 객체 charObj의 key 반환
- find 함수를 사용하여 value로 key 판별

### maxKey & maxValue variables
- 변수 maxKey, maxValue를 각각 초기화
- for of 반복문애서 문자열 str 요소를 차례로 순회하여 객체 charObj의 key와 value를 설정
- for in 반복문에서 객체 charObj key를 차례로 순회하여 value가 maxValue보다 크면 maxKey와 maxValue를 각각 변경

## 💡
객체 설정은 count, verification, validation에 유용
함수를 불필요하게 사용하지 않고 변수 설정만으로 간단한 문제 해결이 가능
