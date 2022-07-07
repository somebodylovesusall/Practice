// Error Bubbling Up & Propagating
function a() {
  throw new Error('Error!');
}

function b() {
  try {
    a();
  } catch(error) {
    console.log('에러 처리 불가능!');
    throw error;
  }
}

function c() {
  b();
}

try {
  c();
} catch(error) {
  console.log('Catched!');
}
console.log('Done!');