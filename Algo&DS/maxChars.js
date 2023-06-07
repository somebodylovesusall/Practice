/* Max Chars
  Given a string, return the character that is most commonly used in the string.

  Examples:
  maxChar("abcccccccd") === "c"
  maxChar("apple 1231111") === "1"
 */

// 1. for of & for in loops + maxCount array
function maxChar1(str) {
  const charObj = {};
  const maxCount = [];  // charObj의 value만 별도로 저장할 배열 maxCount 초기화
  
  for (let char of str) {
    if (!charObj[char]) charObj[char] = 1;
    else charObj[char] = charObj[char] + 1;
  }

  for (let obj in charObj) {
    maxCount.push(charObj[obj]);
  }

  const maxValue = Math.max(...maxCount); // Spread 구문을 활용하여 배열 요소 열거
  const maxKey = Object.keys(charObj).find(key => charObj[key] === maxValue); // find 함수를 사용하여 maxValue에 해당하는 maxKey 반환

  return maxKey;
}

// 2. for of & for in loops + maxKey & maxValue variables
function maxChar2(str) {
  const charObj = {};
  let maxKey = "";  // charObj의 key와 비교할 변수 maxKey 초기화
  let maxValue = 0; // charObj의 value와 비교할 변수 maxValue 초기화

  for (let char of str) {
    if (charObj[char]) charObj[char] = charObj[char] + 1;
    else charObj[char] = 1;
  }

  for (let char in charObj) {
    if (charObj[char] > maxValue) {
      maxValue = charObj[char];
      maxKey = char;
    }
  }

  return maxKey;
}