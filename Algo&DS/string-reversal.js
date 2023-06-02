// String Reversal
/* 
  Given a string, return a new string with the reversed order of characters.

  Examples:
  - reverse('apple') === 'leppa'
  - reverse('hello') === 'olleh'
  - reverse('Greetings!') === '!sgniteerG'
*/

// 1. for loop
// 배열의 특정 원소에 접근할 때를 제외하고, 문법 오류 방지를 위하여 for 문 사용을 권장하지 않음
function reverseStr1(str) {
  const arr = str.split("");
  const reverseArr = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    reverseArr.push(arr[i]);  // push 함수를 사용하여 새로운 배열 맨 뒤에 원소를 삽입
  }
  return reverseArr.join("");
}

// 2. forEach method
// 기존 for 문의 대안으로 forEach 함수 사용
function reverseStr2(str) {
  const arr = str.split("");
  const reverseArr = [];

  arr.forEach((elem) => {
    reverseArr.unshift(elem); // unshift 함수를 사용하여 새로운 배열 맨 앞에 원소를 삽입
  });

  return reverseArr.join("");
}

 // 3. reverse method
 // 제일 간단하지만 reverse 함수를 모르면 분명하게 알 수 없는 방법
 function reverseStr3(str) {
  return str.split("").reverse().join("");
 }

 // 4. for of loop
 // 기존 for 문의 대안으로 새로운 문법인 for of 반복문 사용
function reverseStr4(str) {
  let reversed = "";

  for (let char of str) {
    reversed = char + reversed; // reversed 맨 앞에 새로운 char를 누적
  }

  return reversed;
}

 // 5. reduce method
 // 제일 어렵지만 잘 활용하면 쓰임새가 좋은 reduce 함수
 function reverseStr5(str) {
  return str.split("").reduce((reversed, char) => char + reversed, "");
 }