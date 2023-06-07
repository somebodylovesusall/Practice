/* Palindromes
  Given a string, return true if the string is a palindrome or false if it is not.
  Palindromes are strings that form the same word if it is reversed.
  *Do* include spaces and punctuation in determining if the string is a palindrome.

  Examples:
  palindrome("abba") === true
  palindrome("abcdefg") === false
*/

// 1. for loop
function palindrome1(str) {
  let isPalindrome = false;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[str.length - (i + 1)]) { // 배열이나 문자열의 인덱스는 0부터 시작하므로 마지막 요소에서 추가로 1을 뺌
      isPalindrome = true;
    } else {
      isPalindrome = false;
      return false;
    }
  }

  return true;  // 가급적이면 단일 return 문으로 반환
}

// 2. forEach method
function palindrome2(str) {
  const arr = str.split("");
  const reversedArr = [];

  arr.forEach(elem => reversedArr.unshift(elem));  // unshift 함수를 사용하여 새로운 배열 맨 앞에 요소 삽입

  return arr.join("") === reversedArr.join("");
}

// 3. reverse method
function palindrome3(str) {
  const reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}

// 4. every method
function palindrome4(str) {
  return str.split("").every((char, index) => char === str[str.length - index - 1]);  // every 함수는 조건을 모두 만족하면 true 반환
}