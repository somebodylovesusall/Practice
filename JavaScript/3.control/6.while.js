// 반복문 (Loop Statement)
// while (조건식) {}
// 조건식의 값이 false가 될 때까지 {} 코드 블럭을 반복 수행
let num = 5;
while (num >= 0) {
  console.log(num);
  i--;
}

let isActive = false;
let i = 0;
while (isActive) {
  console.log('Still Alive!');
  if (i === 1000) {
    break;
  }
  i++;
}

do {
  console.log('Still Alive?');
} while (isActive);