/* Anagrams
  Check to see if two provided strings are anagrams of each other.
  One string is an anagram of another if it uses the same characters in the same quantity.
  Only consider characters, not spaces or punctuation.
  Consider capital letters to be the same as lower case

  Examples:
  anagrams('rail safety', 'fairy tales') === true
  anagrams('RAIL! SAFETY!', 'fairy tales') === true
  anagrams('Hi there', 'Bye there') === false
*/

// 1. iteration
function anagrams1(strA, strB) {
  const charObjA = buildCharObj(strA);
  const charObjB = buildCharObj(strB);

  if (Object.keys(charObjA).length !== Object.keys(charObjB).length) return false;

  for (let char in charObjA) {
    if (charObjA[char] !== charObjB[char]) return false;
  }

  return true;
}

function buildCharObj(str) {
  const charObj = {};

  for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
    charObj[char] = charObj[char] + 1 || 1;
  }

  return charObj;
}

// 2. sort method
function anagrams2(str1, str2) {
  return cleanStr(str1) === cleanStr(str2);
}

function cleanStr(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}