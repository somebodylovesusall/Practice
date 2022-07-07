// 주석 (Comment)
// 한 줄 주석
// TODO(WHO): 해야 할 일 작성
// TODO(WHO): OO 기능 구현

/**
* 주석은 코드 자체가 아닌 왜(WHY)와 어떻게(HOW)를 설명 (단, 정말 필요한 경우에만)
*/

// 외부에서 많이 쓰이는 함수 API인 경우 JSDoc을 사용
/**
 * 주어진 두 인자를 더한 값을 반환
 * @param {*} a 숫자 1
 * @param {*} b 숫자 2
 * @returns a + b
 */
function add(a, b) {
  return a + b;
}