// 논리 연산자 (Logical Operators)
// (&&): 그리고
// (||): 또는
// (!): 부정
// (!!): 값을 boolean 타입으로 변환
let num = 8;
if (num >= 0 || num > 20) {
  console.log('👍');
}
if (num != 9) {
  console.log('🙏');
}

console.log(true && true);    // true
console.log(true && false);   // false
console.log(false && true);   // false
console.log(false && false);  // false

console.log(true || true);    // true
console.log(true || false);   // true
console.log(false || true);   // true
console.log(false || false);  // false

console.log(!'text');
console.log(!!'text');
