// Nullish Coalescing Operator
// ECMAScript 2020 (ES11)
// (??): Null, Undefined 할당
// (||): 값이 falsy한 경우 할당 -> 0, -0, null, undefined, ''
let num;
console.log(num || '-1');
console.log(num ?? '-1');