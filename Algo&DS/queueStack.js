/* Queue Stack
  Implement a Queue data structure using two stacks.
  Do not create an array inside of the 'Queue' class.
  Queue should implement the methods 'add', 'remove', and 'peek'.
  For a reminder on what each method does, look back at the Queue exercise.

  Examples:
  const q = new Queue();
  q.add(1);
  q.add(2);
  q.peek(); --> 1
  q.remove(); --> 1
  q.remove(); --> 2
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

class Queue {
  constructor() {
    this.stackOne = new Stack();
    this.stackTwo = new Stack();
  }

  add(element) {
    this.stackOne.push(element);
  }

  remove() {
    while (this.stackOne.peek()) {
      this.stackTwo.push(this.stackOne.pop());
    }

    const top = this.stackTwo.pop();

    while (this.stackTwo.peek()) {
      this.stackOne.push(this.stackTwo.pop());
    }

    return top;
  }

  peek() {
    while (this.stackOne.peek()) {
      this.stackTwo.push(this.stackOne.pop());
    }

    const top = this.stackTwo.peek();

    while (this.stackTwo.peek()) {
      this.stackOne.push(this.stackTwo.pop());
    }

    return top;
  }
}