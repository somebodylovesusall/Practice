/* Fibonacci
  Print out the n-th entry in the fibonacci series.
  The fibonacci series is an ordering of numbers where each number is the sum of the preceeding two.
  For example, the sequence: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34] forms the first ten entries of the fibonacci series.

  Examples:
  fib(4) === 3;
  fib(7) === 13;
*/

// 1. iteration: while loop
function fib1(n) {
  let num1 = 0;
  let num2 = 1;
  let sum = 0;
  let count = 1;

  while (count < n) {
    sum = num1 + num2;
    num1 = num2;
    num2 = sum;

    count = count + 1;
  }

  return sum;
}

// 2. iteration: for loop
function fib2(n) {
  const fibArr = [0, 1];

  for (let i = 2; i <= n; i++) {
    fibArr.push(fibArr[i - 2] + fibArr[i - 1]);
  }

  return fibArr[n];
}

// 3. recursion
function fib3(n) {
  if (n < 2) return n;

  return fib3(n - 2) + fib3(n - 1);
}

// 4. memoization
function fib(n) {
  if (n < 2) return n;

  return fib(n - 2) + fib(n - 1);
}

function memoize(fn) {
  const cacheObj = {};

  return function(...args) {
    if (cacheObj[args]) return cacheObj[args];
  
    const result = fn.apply(this, args);
    cacheObj[args] = result;

    return result;
  }
}

fib = memoize(fib);

console.log(fib(4));