// JSON (JavaScript Object Notation)
// 클라이언트(브라우저, 모바일)와 서버 간의 HTTP 통신을 위한 객체 형태의 텍스트 포맷
// stringify: object to JSON
// parse: JSON to object
const ellie = {
  name : 'Ellie',
  age : 20,
  eat : () => console.log('eat'),
};

// 직렬화 (Serialization): 객체를 문자열 데이터 타입으로 변환
const json = JSON.stringify(ellie);
console.log(ellie);
console.log(json);

// 역직렬화 (Deserialization): 문자열 데이터 타입을 자바스크립트 객체로 변환
const obj = JSON.parse(json);
console.log(obj)
