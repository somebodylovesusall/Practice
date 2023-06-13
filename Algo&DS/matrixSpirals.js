/* Matrix Spirals
  Write a function that accepts an integer N and returns a NxN spiral matrix.

  Examples:
  matrix(2);
  [[1, 2],
  [4, 3]]
  matrix(3);
  [[1, 2, 3],
  [8, 9, 4],
  [7, 6, 5]]
  matrix(4);
  [[1, 2, 3, 4],
  [12, 13, 14, 5],
  [11, 16, 15, 6],
  [10,  9,  8, 7]]
*/

function matrix(n) {
  const matrixArr = [];

  for (let i = 0; i < n; i++) {
    matrixArr.push([]);
  }

  let count = 1;
  let startRow = 0;
  let endRow = n - 1;
  let startCol = 0;
  let endCol = n - 1;

  while (startRow <= endRow && startCol <= endCol) {
    for (let i = startCol; i <= endCol; i++) {
      matrixArr[startRow][i] = count;
      count = count + 1;
    }
  
    startRow = startRow + 1;
  
    for (let i = startRow; i <= endRow; i++) {
      matrixArr[i][endCol] = count;
      count = count + 1;
    }
  
    endCol = endCol - 1;
  
    for (let i = endCol; i>= startCol; i--) {
      matrixArr[endRow][i] = count;
      count = count + 1;
    }
  
    endRow = endRow - 1;

    for (let i = endRow; i >= startRow; i--) {
      matrixArr[i][startCol] = count;
      count = count + 1;
    }

    startCol = startCol + 1;
  }

  return matrixArr;
}