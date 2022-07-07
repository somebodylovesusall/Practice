// 일반 코딩 방식과 어긋나서 개발 환경에 맞지 않음
// 코드의 가독성과 유지보수성에 좋지 않음

// 1. 변수 선언 시 키워드 없이 선언 및 할당이 가능 -> 선언 or 재할당 구분이 어려움
something = '💩';
console.log(something);

// 2. 중복 선언이 가능
var poo = '💩';
var poo = '💩';
console.log(poo);

// 3. 블록 레벨 범위는 미지원 -> 지역 or 전역 변수 구분이 어려움
var apple = '사과';
{
  var apple = '🍎';
  {
    var apple = '🍏';
  }
}
console.log(apple);

// 4. 함수 레벨 범위는 지원
function example() {
  var dog = '🦮';
}
console.log(dog);