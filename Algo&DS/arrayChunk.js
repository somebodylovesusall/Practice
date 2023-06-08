/* Array Chunk
  Given an array and chunk size, divide the array into many subarrays where each subarray is of the provided size.

  Examples:
  Chunk size 2: chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
  Chunk size 2: chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
  Chunk size 3: chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
  Chunk size 4: chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
  Chunk size 10: chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]
*/

// 1. two-dimensional array
function chunk1(array, size) {
  const mainArray = [];
  let subArray = [];

  for (let i = 0; i < array.length; i++) {
    if (subArray.length === size) {
      mainArray.push(subArray);
      subArray = [];
    }
    subArray.push(array[i]);

    if (i === array.length - 1) mainArray.push(subArray);
  }

  return mainArray;
}

// 2. chunked & unchunked arrays
function chunk2(array, size) {
  const chunkedArr = [];

  for (let element of array) {
    const last = chunkedArr[chunkedArr.length - 1];

    if (!last || last.length === size) chunkedArr.push([element]);
    else last.push(element);
  }

  return chunkedArr;
}

// 3. slice method
function chunk3(array, size) {
  const chunkedArr = [];
  let index = 0;

  while (index < array.length) {
    chunkedArr.push(array.slice(index, index + size));
    index = index + size;
  }

  return chunkedArr;
}