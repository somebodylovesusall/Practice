# Anagrams

## ❔
주어진 두 문자열이 동일한 문자로 구성되었는지를 판별 (특수문자 및 공백 -> "", 대문자 -> 소문자)
- 매개변수: String, String
- 반환값: Boolean

## ✔️
정규표현식을 특정 문자열로 대체하는 replace 함수와 대문자를 소문자로 변환하는 toLowerCase 함수를 사용  
객체의 key를 문자로 value를 빈도로 설정

## ❕
### iteration
- 주어진 문자열로 새로운 객체를 반환하는 buildCharObj 함수 생성
- 정규표현식과 replace, towLowerCase 함수를 사용하여 주어진 문자열 정리
- 주어진 두 문자열을 buildCharObj 함수의 매개변수로 전달하여 각각 객체 생성
- Object.keys 함수를 사용하여 객체 charObjA와 charObjB의 key 개수 비교
- 객체 charObjA의 key에 해당하는 value 값이 객체 charObjB와의 동일 여부 판별 

### sort method
- 주어진 문자열을 정리하는 cleanStr 함수 생성
- 문자열 -> 배열 -> 정렬 -> 문자열
- 주어진 두 문자열을 cleanStr 함수의 매개변수로 전달하여 동일 여부 판별

## 💡
정규표현식: ```/[^\w]/g``` (non-word characters)
내장 함수
- sort(): 배열의 요소를 오름차순으로 정렬
- replace(pattern, replacement): pattern을 replacement로 대체
- toLowerCase(): 대문자를 소문자로 변환
