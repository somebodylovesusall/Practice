/* Integer Reversal
  Given an integer, return an integer that is the reverse ordering of numbers.

  Examples:
  reverseInt(15) === 51;
  reverseInt(981) === 189;
  reverseInt(500) === 5;
  reverseInt(-15) === -51;
  reverseInt(-90) === -9;
*/

// 1. forEach method
function reverseInt1(n) {
  const reversedArr = [];
  n.toString().split("").forEach(elem => reversedArr.unshift(elem));

  if (reversedArr[reversedArr.length - 1] === "-") {
    reversedArr.pop("-");
    reversedArr.unshift("-");
  }

  return Number(reversedArr.join(""));
}

// 2. reverse method
function reverseInt2(n) {
  const reversedArr = n.toString().split("").reverse();

  if (reversedArr[reversedArr.length - 1] === "-") {
    reversedArr.pop();
    reversedArr.unshift("-");
  }

  return Number(reversedArr.join(""));
}

// 3. parseInt & Math.sign method
function reverseInt3(n) {
  const reversedNum = n.toString().split("").reverse().join("");
  return parseInt(reversedNum) * Math.sign(n);
}