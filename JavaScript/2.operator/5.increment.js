// 증가 & 감소 연산자 (Increment & Decrement Operators)
let a = 0;
console.log(a);
a++; // a = a + 1;
console.log(a);
a--; // a = a - 1;
console.log(a);
console.clear();

// Note
// a++: 필요한 연산을 수행한 후 값을 증가함
// ++a: 값을 먼저 증가한 후 필요한 연산을 수행함
a = 0;
console.log(a++);
console.log(a);
let b = a++;
console.log(b);
console.log(a);

a = 0;
console.log(++a);
console.log(a);
b = ++a;
console.log(b);
console.log(a);