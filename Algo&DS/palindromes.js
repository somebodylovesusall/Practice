/* Palindromes
  Given a string, return true if the string is a palindrome or false if it is not.
  Palindromes are strings that form the same word if it is reversed.
  *Do* include spaces and punctuation in determining if the string is a palindrome.

  Examples:
  palindrome("abba"); === true
  palindrome("abcdefg"); === false
*/

// 1. isPalindrome variable
function palindrome1(str) {
  let isPalindrome = false;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[str.length - (i + 1)]) {
      isPalindrome = true;
    } else {
      isPalindrome = false;
      return false;
    }
  }

  return true;
}

// 2. unshift method
function palindrome2(str) {
  const arr = str.split("");
  const reversedArr = [];

  arr.forEach(elem => reversedArr.unshift(elem));

  return arr.join("") === reversedArr.join("");
}

// 3. reverse method
function palindrome3(str) {
  const reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}

// 4. every method
function palindrome4(str) {
  return str.split("").every((char, index) => char === str[str.length - index - 1]);
}