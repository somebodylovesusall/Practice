/* Linked Lists
  Implement classes Node and Linked Lists.
  For detailed explanation, see "linkedLists.html" file.
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