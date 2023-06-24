/* Selection Sort
  Given an array, sort it by using the selection sort algorithm and return the sorted array.

  Example:
  selectionSort([100, -40, 500, -124, 0, 21, 7]); --> [-124, -40, 0, 7, 21, 100, 500]
*/

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let index = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[index]) index = j;
    }

    if (index !== i) {
      const min = arr[index];
      arr[index] = arr[i];
      arr[i] = min;
    }
  }

  return arr;
}