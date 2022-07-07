// Quiz
// 1. 주어진 배열 안의 딸기 아이템을 키위로 교체 (기존 배열 수정 X)
// input: ['🍌', '🍓', '🍇', '🍓']
// output: ['🍌', '🥝', '🍇', '🥝']
function replace(array, from, to) {
  return array.map(item => item === from ? to : item);
};
const array = ['🍌', '🍓', '🍇', '🍓'];
const result = replace(array, '🍓', '🥝');
console.log(result);

// 2. 배열과 특정한 요소를 전달 받아 배열 안에 그 요소가 몇개 있는지 카운트
// input: ['🍌', '🥝', '🍇', '🥝'], '🥝'
// output: 2
function count (array, item) {
  return array.filter(value => value === item).length;
}
console.log(count(['🍌', '🥝', '🍇', '🥝'], '🥝'));

// 3. 배열1, 배열2 두 개의 배열을 전달 받아 배열1 아이템 중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'], ['🍌', '🍓', '🍇', '🍓']
// output: ['🍌', '🍇']
function match(arr1, arr2) {
  return arr1.filter(item => arr2.includes(item));
}
console.log(match(['🍌', '🥝', '🍇'], ['🍌', '🍓', '🍇', '🍓']));

// 4. 5 이상 숫자들의 평균
const nums = [3, 16, 5, 25, 4, 34, 21];
const result2 = nums
  .filter(num => num > 5)
  .reduce((avg, num, _, array) => avg + num / array.length, 0);
console.log(result2);