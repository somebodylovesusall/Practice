/* Steps
  Write a function that accepts a positive number N.
  The function should console log a step shape with N levels using the # character.
  Make sure the step has spaces on the right hand side!

  Examples:
  steps(2);
  Output from console.log():
  '# '
  '##'
  steps(3);
  Output from console.log():
  '#  '
  '## '
  '###'
  steps(4);
  Output from console.log():
  '#   '
  '##  '
  '### '
  '####'
*/

// 1. repeat method
function steps1(n) {
  let index = 1;

  while (index <= n) {
    console.log("#".repeat(index) + " ".repeat(n - index));
    index = index + 1;
  }
}

// 2. iteration
function steps2(n) {
  for (let row = 0; row < n; row++) {
    let stair = "";

    for (let col = 0; col < n; col++) {
      if (col <= row) stair = stair + "#";
      else stair = stair + " ";
    }

    console.log(stair);
  }
}

// 3. recursion
function steps3(n, row = 0, stair = "") {
  if (n === row) return;

  if (n === stair.length) {
    console.log(stair);
    return steps3(n, row + 1);
  }

  // if (stair.length <= row) stair = stair + "#";
  // else stair = stair + " ";

  const add = stair.length <= row ? "#" : " ";
  steps3(n, row, stair + add);
}