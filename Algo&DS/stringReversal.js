/* String Reversal
  Given a string, return a new string with the reversed order of characters.

  Examples:
  reverse('apple') === 'leppa'
  reverse('hello') === 'olleh'
  reverse('Greetings!') === '!sgniteerG'
*/

// 1. push method
function reverseStr1(str) {
  const arr = str.split("");
  const reversedArr = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
  }

  return reversedArr.join("");
}

// 2. unshift method
function reverseStr2(str) {
  const arr = str.split("");
  const reversedArr = [];

  arr.forEach(elem => reversedArr.unshift(elem));

  return reversedArr.join("");
}

// 3. reverse method
function reverseStr3(str) {
  return str.split("").reverse().join("");
}

// 4. for of loop
function reverseStr4(str) {
  let reversedStr = "";

  for (let char of str) {
    reversedStr = char + reversedStr;
  }

  return reversedStr;
}

// 5. reduce method
function reverseStr5(str) {
  return str.split("").reduce((reversedStr, char) => char + reversedStr, "");
}