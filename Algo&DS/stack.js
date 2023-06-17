/* Stack
  Create a stack data structure. 
  The stack should be a class with methods push, pop, and peek.
  Adding an element to the stack should store it until it is removed.

  Example:
  const s = new Stack();
  s.push(1);
  s.push(2);
  s.pop(); --> 2
  s.pop(); --> 1
*/

class Stack {
  constructor() {
    this.data = [];
  }

  push(element) {
    this.data.push(element);
  }

  pop() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}