// Quiz

{
  const x = 1;
  {
    const y = 2;
    console.log(x);
  }
  console.log(x);
  console.log(y);
}

const text = 'global';    // 전역 변수 (Global Variable)
{
  const text = 'inside block1';   // 지역 변수 (Local Variable)
  {
    console.log(text);
  }
}