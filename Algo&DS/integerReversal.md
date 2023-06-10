# Integer Reversal

## ❔
부호를 그대로 유지한 채 주어진 숫자에 대한 역순의 숫자 생성
- 매개변수: ```Number```
- 반환값: ```Number```

## ✔️
문자열과 숫자를 형변환하는 ```toString```, ```Number``` 함수 사용

## ❕
### forEach method
- ```forEach``` 함수로 숫자 -> 문자열 -> 배열 요소를 차례로 순회
- ```pop```, ```unshift``` 함수를 사용하여 음수 부호 해결

### reverse method
- ```forEach``` 함수 대신 ```reverse``` 함수를 사용

### parseInt & Math.sign method
- ```parseInt``` 함수를 사용하여 정수로 형변환
- ```parseInt``` 함수 대신 ```Number``` 함수를 사용하면 숫자로 인식하지 못하여 ```NaN``` 반환
- ```Math.sign``` 함수를 사용하여 부호 결정

## 💡
다양한 형변환 함수
- ```toString()```: 문자열을 반환
- ```Number(value)```: 숫자를 반환
- ```parseInt(value)```: 정수를 반환
- ```Math.sign(value)```: 양수일 때 1, 음수일 때 -1을 반환
