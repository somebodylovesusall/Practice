// Optional Chaining Operator
// ECMAScript 2020 (ES11)
// (?.): Null, Undefined 확인
let item = {price : 1};
const price = item?.price;
console.log(price);

let obj = {name : '🐶', owner : {name : 'Ellie'}};
function printName(obj) {
  const ownerName = obj?.owner?.name;
  console.log(ownerName);
}
printName(obj);
