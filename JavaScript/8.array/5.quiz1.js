// Quiz
// 1. 주어진 배열 안의 딸기 아이템을 키위로 교체 (기존 배열 수정 X)
// input: ['🍌', '🍓', '🍇', '🍓']
// output: ['🍌', '🥝', '🍇', '🥝']
function replace(array, from, to) {
  const replaced = Array.from(array);
  for (let i = 0; i < replaced.length; i++) {
    if (replaced[i] === from) {
      replaced[i] = to;
    }
  }
  return replaced;
}
const array = ['🍌', '🍓', '🍇', '🍓'];
const result = replace(array, '🍓', '🥝');
console.log(result);

// 2. 배열과 특정한 요소를 전달 받아 배열 안에 그 요소가 몇개 있는지 카운트
// input: ['🍌', '🥝', '🍇', '🥝'], '🥝'
// output: 2
function count (array, item) {
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      counter++;
    }
  }
  return counter;
}
console.log(count(['🍌', '🥝', '🍇', '🥝'], '🥝'));

// 3. 배열1, 배열2 두 개의 배열을 전달 받아 배열1 아이템 중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'], ['🍌', '🍓', '🍇', '🍓']
// output: ['🍌', '🍇']
function match(arr1, arr2) {
  const result = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      result.push(arr1[i]);
    }
  }
  return result;
}
console.log(match(['🍌', '🥝', '🍇'], ['🍌', '🍓', '🍇', '🍓']));