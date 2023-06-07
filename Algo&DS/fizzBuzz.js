/* FizzBuzz
  Write a program that console logs the numbers from 1 to n.
  For multiples of three print 'fizz' instead of the number 
  For the multiples of five print 'buzz'
  For numbers which are multiples of both three and five print 'fizzbuzz'

  Example:
  fizzBuzz(5);
  Output from console.log:
  1
  2
  fizz
  4
  buzz
*/

// 1. while loop
function fizzBuzz1(n) {
  let count = 1;

  while (count <= n) {
    if (count % 15 === 0) console.log("fizzbuzz");
    else if (count % 3 === 0) console.log("fizz");
    else if (count % 5 === 0) console.log("buzz");
    else console.log(count);

    count = count + 1;
  }
}

// 2. for loop
function fizzBuzz2(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 ===0) console.log("fizzbuzz");
    else if (i % 3 === 0) console.log("fizz");
    else if (i % 5 === 0) console.log("buzz");
    else console.log(i);
  }
}