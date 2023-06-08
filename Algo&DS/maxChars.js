/* Max Chars
  Given a string, return the character that is most commonly used in the string.

  Examples:
  maxChar("abcccccccd") === "c"
  maxChar("apple 1231111") === "1"
 */

// 1. maxCount array
function maxChar1(str) {
  const charObj = {};
  const maxCount = [];
  
  for (let char of str) {
    if (!charObj[char]) charObj[char] = 1;
    else charObj[char] = charObj[char] + 1;
  }

  for (let obj in charObj) {
    maxCount.push(charObj[obj]);
  }

  const maxValue = Math.max(...maxCount);
  const maxKey = Object.keys(charObj).find(key => charObj[key] === maxValue);

  return maxKey;
}

// 2. maxKey & maxValue variables
function maxChar2(str) {
  const charObj = {};
  let maxKey = "";
  let maxValue = 0;

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