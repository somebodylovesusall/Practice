// 단항 연산자 (Unary Operators)
// (+): 양, (-): 음, (!): 부정

let a = 5;
a = -a; // -1 * 5
console.log(a);
a = -a; // -1 * -5
console.log(a);

a = +a;
console.log(a);

a = -a; // -5
a = +a; // +(-5)
console.log(a);

let boolean = true;
console.log(boolean);
console.log(!boolean);
console.log(!!boolean);

// (+): 숫자가 아닌 타입들을 숫자로 변환하면 어떤 값이 나오는지 확인 가능
console.clear();
console.log(+false);      // 0
console.log(+null);       // 0
console.log(+'');         // 0
console.log(+true);       // 1
console.log(+'text');     // NaN
console.log(+undefined);  // NaN

// (!!): 값을 boolean 타입으로 변환
console.log(!!1);