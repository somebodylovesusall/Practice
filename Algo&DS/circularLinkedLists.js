/* Circular Linked Lists
  1. Implement the 'midpoint' function.
  Return the 'middle' node of a linked list.
  If the list has an even number of elements return the node at the end of the first half of the list.
  Do not use a counter variable.
  Do not retrieve the size of the list.
  Only iterate through the list one time.

  Example:
  const list = new LinkedList();
  list.insertLast('a');
  list.insertLast('b');
  list.insertLast('c');
  midpoint(list); --> { data : 'b' }
  
  2. Implement the 'circular' function.
  Given a linked list, return true if the list is circular, false if it is not.

  Example:
  const list = new LinkedList();
  const a = new Node('a');
  const b = new Node('b');
  const c = new Node('c');
  list.head = a;
  a.next = b;
  b.next = c;
  c.next = b; 
  circular(list); --> true

  3. Implement the 'tail' function.
  Given a linked list and integer n, return the element n spaces from the last node in the list. 
  Do not call the 'size' method of the linked list.
  Assume that n will always be less than the length of the list.

  Example:
  const list = new LinkedList(); 
  list.insertLast('a');
  list.insertLast('b');
  list.insertLast('c');
  list.insertLast('d');
  tail(list, 2).data; --> 'b'
*/

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let count = 0;
    let node = this.head;

    while (node) {
      count = count + 1;
      node = node.next;
    }

    return count;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) return null;

    let node = this.head;
    while (node) {
      if (!node.next) return node;
      node = node.next;
    }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) return;
    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) return;

    if (!this.head.next) {
      this.head = null;
      return;
    }

    let prev = this.head;
    let node = this.head.next;

    while (node.next) {
      prev = node;
      node = node.next;
    }

    prev.next = null;
  }

  insertLast(data) {
    const last = this.getLast();
    
    if (last) last.next = new Node(data);
    else this.head = new Node(data);
  }

  getAt(index) {
    let count = 0;
    let node = this.head;

    while (node) {
      if (count === index) return node;
      count = count + 1;
      node = node.next;
    }

    return null;
  }

  removeAt(index) {
    if (!this.head) return;

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    const prev = this.getAt(index - 1);

    if (!prev || !prev.next) return;
    prev.next = prev.next.next;
  }

  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const prev = this.getAt(index - 1) || this.getLast();
    const node = new Node(data, prev.next);
    prev.next = node;
  }

  forEach(fn) {
    let node = this.head;
    let count = 0;

    while (node) {
      fn(node, count);
      node = node.next;
      count = count + 1;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;

    while (node) {
      yield node;
      node = node.next;
    }
  }
}

function midpoint(list) {
  let slow = list.head;
  let fast = list.head;

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}

function circular(list) {
  let slow = list.head;
  let fast = list.head;

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (fast === slow) return true;
  }

  return false;
}

function tail(list, n) {
  let slow = list.head;
  let fast = list.head;

  while (n > 0) {
    fast = fast.next;
    n = n - 1;
  }

  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
}