// 중복 제거 배열
const fruits = ['🍌', '🍎', '🍇', '🍌', '🍎', '🍑'];
console.log([...new Set(fruits)]);

function removeDuplication(array) {
  return [...new Set(array)];
}
console.log(removeDuplication(fruits));

// 공통 아이템 추출 Set
const set1 = new Set([1,2,3,4,5]);
const set2 = new Set([1,2,3]);

function findIntersection(set1, set2) {
  return new Set([...set1].filter(item => set2.has(item)));
}
console.log(findIntersection(set1, set2));