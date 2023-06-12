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

// 1. iteration
function pyramids1(n) {
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

function pyramids3(n) {
  const midpoint = Math.floor((2 * n - 1) / 2);

  for (let row = 0; row < n; row++) {
    let level = "";

    for (let col = 0; col < 2 * n - 1; col++) {
      if (midpoint - row === col || midpoint + row === col) level = level + "#";
      else level = level + " "; 
    }

    console.log(level);
  }
}

// 2. recursion
function pyramids2(n, row = 0, level = "") {
  const midpoint = Math.floor((2 * n - 1) / 2);

  if (n === row) return;

  if (level.length === 2 * n - 1) {
    console.log(level);
    return pyramids2(n, row + 1);
  }

  // let add;
  // if (midpoint - row <= level.length && midpoint + row >= level.length) add = "#";
  // else add = " ";

  let add = midpoint - row <= level.length && midpoint + row >= level.length ? "#" : " ";
  pyramids2(n, row, level + add);
}