/* Naming Rules
* 라틴문자(0-9, a-z, A-Z)
* 대소문자 구분
* 추천: camelCase
* 한국어, 예약어, 이모지, 특수문자 사용 불가능 (예외: _, $)
* 숫자로 시작 불가능
* 여러 개의 변수를 1, 2, 3 숫자로 구분하지 말고 최대한 의미있는 구체적인 이름으로 작성 필요
*/ 

let apple;
let redApple;

// Bad
let num = 20;
let audio1;
let audio2;

// Good
let myAge = 20;
let backgroundAudio;
let windAudio;

// Tip
let audioBackground;
let audioWind;

