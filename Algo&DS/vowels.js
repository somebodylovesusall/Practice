/* Vowels
  Write a function that returns the number of vowels used in a string.
  Vowels are the characters a, e, i, o, and u.
  
  Examples:
  vowels('Hi There!'); --> 3
  vowels('Why do you ask?'); --> 4
  vowels('Why?'); --> 0
*/

// 1. includes method
function vowels1(str) {
  let count = 0;
  const vowelArr = ["a", "e", "i", "o", "u"];

  for (let char of str.toLowerCase()) {
    if (vowelArr.includes(char)) count = count + 1;
  }

  return count;
}

console.log(vowels1("Hi ThereII!"));

// 2. regular expression
function vowels2(str) {
  const vowelMatchArr = str.match(/[aeiou]/gi);
  return vowelMatchArr ? vowelMatchArr.length : 0;
}

console.log(vowels2("HI Sdfyiiofj"));