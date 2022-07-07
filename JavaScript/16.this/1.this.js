'use strict';
/**
 * Global Context
 * - Browser: window
 * - Node: module
 */
console.log(this);

const x = 0;
module.exports.x = x;
console.log(this);
console.log(globalThis);
// globalThis.setTimeout();
// setTimeout();
console.clear();

/**
 * Function
 * - Strict Mode: undefined
 * - Sloppy Mode: globalThis
 */
function fun() {
  console.log(this);
}
fun();

/**
 * Constructor or Class
 * - instance
 */
function Cat(name) {
  this.name = name;
  this.printName = function () {
    console.log(this.name);
  };
}
const cat1 = new Cat('냐옹');
const cat2 = new Cat('미야옹');
cat1.printName();
cat2.printName();