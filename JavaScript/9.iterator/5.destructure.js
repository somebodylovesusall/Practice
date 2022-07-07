// 구조 분해 할당 (Destructuring Assignment)
// 데이터 그룹화가 용이
const fruits = ['🍏', '🥝', '🍓', '🍌'];
const [first, second, ...others] = fruits;
console.log(first);
console.log(second);
console.log(others);

const point = [1, 2];
const [y, x, z = 0] = point;
console.log(x);
console.log(y);
console.log(z);

function createEmoji() {
  return ['apple', '🍎'];
}
const [title, emoji] = createEmoji();
console.log(title);
console.log(emoji);

const ellie = {name : 'Ellie', age : 20, job : 'SW Engineer'};
function display({name, age, job}) {
  console.log('name:', name);
  console.log('age:', age);
  console.log('job:', job);
}
display(ellie);

const {name, age, job : occupation, pet = '🐶'} = ellie;
console.log(name);
console.log(age);
console.log(occupation);
console.log(pet);