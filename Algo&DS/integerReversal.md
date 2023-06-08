# Integer Reversal

## ❔

주어진 숫자에 대한 역순의 숫자 생성 + 부호는 그대로 유지 (매개변수: Number, 반환값: Number)

## ✔️

문자열과 숫자의 형변환 함수 사용 (toString, Number 함수)

## ❕

- forEach method: forEach 함수로 반복한 후 unshift 함수를 사용하여 맨 앞에 요소 삽입 후 음수일 때 (-) 부호 해결
- reverse method: forEach 함수 대신 reverse 함수를 사용
- parseInt & Math.sign method: parseInt 함수로 정수 형변환 후 Math.sign 함수로 부호 결정 (양수: 1, 음수: -1)

## 💡

- 다양한 형변환 함수 (toString, Number, parseInt, Math.sign)
