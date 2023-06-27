/* Pyramids
  Write a function that accepts a positive number N.
  The function should console log a pyramid shape with N levels using the # character.
  Make sure the pyramid has spaces on both the left *and* right hand sides.

  Examples:
  pyramids(1);
  Output from console.log():
  '#'
  pyramids(2);
  Output from console.log():
  ' # '
  '###'
  pyramids(3);
  Output from console.log():
  '  #  '
  ' ### '
  '#####'
*/

// 1. repeat method
function pyramids1(n) {
  let index = 1;

  while (index <= n) {
    console.log(" ".repeat(n - index) + "#".repeat(2 * index - 1) + " ".repeat(n - index));
    index = index + 1;
  }
}

// 2. iteration
function pyramids2(n) {
  const midpoint = Math.floor((2 * n - 1) / 2);

  for (let row = 0; row < n; row++) {
    let level = "";

    for (let col = 0; col < 2 * n - 1; col++) {
      if (midpoint - row <= col && midpoint + row >= col) level = level + "#";
      else level = level + " "; 
    }

    console.log(level);
  }
}

// 3. recursion
function pyramids3(n, row = 0, level = "") {
  const midpoint = Math.floor((2 * n - 1) / 2);

  if (n === row) return;

  if (level.length === 2 * n - 1) {
    console.log(level);
    return pyramids3(n, row + 1);
  }

  // let add;
  // if (midpoint - row <= level.length && midpoint + row >= level.length) add = "#";
  // else add = " ";

  const add = midpoint - row <= level.length && midpoint + row >= level.length ? "#" : " ";
  pyramids3(n, row, level + add);
}