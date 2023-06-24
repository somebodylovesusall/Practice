/* Bubble Sort
  Given an array, sort it by using the bubble sort algorithm and return the sorted array.

  Example:
  bubbleSort([100, -40, 500, -124, 0, 21, 7]); --> [-124, -40, 0, 7, 21, 100, 500]
*/

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < (arr.length - i - 1); j++) {
      if (arr[j] > arr[j + 1]) {
        const less = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = less;
      }
    }
  }

  return arr;
}