// 전역 변수는 어플리케이션 종료 시까지 메모리에서 계속 유지
const global = 1;
{
  // 코드 블록 내부에서만 존재하고 종료 시 Garbage Collector에 의해 자동으로 소멸
  const local = 1;
}

function print() {
  // 함수 내부에서도 필요한 경우 블럭 안에서 변수를 선언하고 사용해야 함
  if (true) {
    let temp = 0;
  }
}
