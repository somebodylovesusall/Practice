// 래퍼 객체 (Wrapper Object)
// 원시 타입을 필요에 따라 관련된 빌트인 객체로 변환
const number = 123;   // number 숫자 원시 타입
console.log(number.toString()); // number 숫자 원시 타입을 감싸고 있는 Number 객체로 wrapping
console.log(number);  // number 숫자 원시 타입

const text = 'text';  // string 문자열 원시 타입
console.log(text);
text.length // String 객체 
text.trim   // String 객체