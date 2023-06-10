/* Capitalization
  Write a function that accepts a string.
  The function should capitalize the first letter of each word in the string and return the result.

  Examples:
  capitalize('a short sentence') --> 'A Short Sentence'
  capitalize('a lazy fox') --> 'A Lazy Fox'
  capitalize('look, it is working!') --> 'Look, It Is Working!'
*/

// 1. slice method
function capitalize1(str) {
  const wordArr = [];
  
  for (word of str.split(" ")) {
    wordArr.push(word[0].toUpperCase() + word.slice(1));
  }

  return wordArr.join(" ");
}

// 2. hard coding
function capitalize2(str) {
  let res = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === " ") res = res + str[i].toUpperCase();
    else res = res + str[i]; 
  }

  return res;
}