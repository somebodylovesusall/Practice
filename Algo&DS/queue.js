/* Queue
  1. Create a queue data structure.
  The queue should be a class with methods 'add' and 'remove'.
  Adding to the queue should store an element until it is removed.

  Example:
  const q = new Queue();
  q.add(1);
  q.remove(); --> 1
  
  2. Implement a 'peek' method in this Queue class.
  'Peek' should return the last element (the next one to be returned) from the queue without removing it.

  Example:
  const q = new Queue();
  q.add(1);
  q.add(2);
  q.peek(); --> 1

  3. Implement the 'weave' function.
  Weave receives two queues as arguments and combines the contents of each into a new, third queue.
  The third queue should contain the alternating content of the two queues.
  The function should handle queues of different lengths without inserting 'undefined' into the new one.
  Do not access the array inside of any queue, only use the 'add', 'remove', and 'peek' functions.

  Example:
  const queueOne = new Queue();
  queueOne.add(1);
  queueOne.add(2);
  const queueTwo = new Queue();
  queueTwo.add('Hi');
  queueTwo.add('There');
  const q = weave(queueOne, queueTwo);
  q.remove(); --> 1
  q.remove(); --> 'Hi'
  q.remove(); --> 2
  q.remove(); --> 'There'
*/

class Queue {
  constructor() {
    this.data = [];
  }

  add(element) {
    this.data.unshift(element);
  }

  remove() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}

function weave(sourceOne, sourceTwo) {
  const queue = new Queue();

  while (sourceOne.peek() || sourceTwo.peek()) {
    if (sourceOne.peek()) queue.add(sourceOne.remove());
    if (sourceTwo.peek()) queue.add(sourceTwo.remove());
  }

  return queue;
}