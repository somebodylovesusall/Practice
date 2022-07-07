// Quiz
// 1. 문자열의 모든 캐릭터를 하나씩 출력
const text = 'Hello World!';
for (let i = 0; i < text.length; i++) {
  console.log(text[i]);
}

// 2. 사용자들의 ID를 잘라내여 각가의 ID를 배열로 보관
const ids = 'user1, user2, user3, user4';
const array = ids.split(', ');
console.log(array);

// 3. 1초에 한번씩 날짜와 시간을 출력
setInterval(() => {
  const now = new Date();
  console.log(now.toLocaleString('ko-KR'));
}, 1000);