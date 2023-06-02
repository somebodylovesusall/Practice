// Palindromes
/*
  Given a string, return true if the string is a palindrome or false if it is not.
  Palindromes are strings that form the same word if it is reversed.
  *Do* include spaces and punctuation in determining if the string is a palindrome.

  Examples:
  palindrome("abba") === true
  palindrome("abcdefg") === false
*/

// 1. for loop
// 기존 for 문을 사용하는 권장하지 않는 방법
function palindrome1(str) {
  let isPalindrome = false;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[str.length - (i + 1)]) { // 배열이나 스트링의 인덱스는 0부터 시작하므로 마지막 요소에서 추가로 1을 뺌
      isPalindrome = true;
    } else {
      isPalindrome = false;
      return false;
    }
  }

  return true;  // 가급적이면 하나의 return 문으로 반환하는 것을 권장
}

// 2. forEach method
// 스트링을 배열로 변환하고 다시 스트링으로 변환
function palindrome2(str) {
  const arr = str.split("");
  const reversedArr = [];

  arr.forEach((elem) => {
    reversedArr.unshift(elem);  // unshift 함수를 사용하여 새로운 배열 맨 앞에 원소를 삽입
  });

  return arr.join("") === reversedArr.join("");
}

// 3. reverse method
// String Reversal과 동일한 원리로 reverse 함수를 사용하여 간단하게 해결
function palindrome3(str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}

// 4. every method
// 조건을 모두 만족할 때 true를 반환
// 간단하지만 이중 비교로 인하여 최선의 해결책은 아님
function palindrome4(str) {
  return str.split("").every((char, index) => {
    return (char === str[str.length - index - 1]);
  });
}