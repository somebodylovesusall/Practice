/* Merge Sort
  Given an array, sort it by using the merge sort algorithm and return the sorted array.

  Example:
  mergeSort([100, -40, 500, -124, 0, 21, 7]); --> [-124, -40, 0, 7, 21, 100, 500]
*/

function merge(left, right) {
  const result = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) result.push(left.shift());
    else result.push(right.shift());
  }

  return [...result, ...left, ...right];
}

function mergeSort(arr) {
  if (arr.length === 1) return arr;

  const center = Math.floor(arr.length / 2);
  const left = arr.slice(0, center);
  const right = arr.slice(center);

  return merge(mergeSort(left), mergeSort(right));
}