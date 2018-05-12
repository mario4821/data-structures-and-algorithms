'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

module.exports = class LinkedList {
  constructor() {
    this.head = null;
  }

  insertAtEnd(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      return this;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    return this;
  }

  kthFromEnd(k) {
    if (!this.head) return null;
    let currentNode = this.head;
    let nodeValue = this.head;
    let counter = 0;

    while (currentNode) {
      currentNode = currentNode.next;
      counter += 1;
    }
    if (k > counter) return null;

    for (let i = 0; i < counter - k - 1; i++) { //eslint-disable-line
      nodeValue = nodeValue.next;
    }
    return nodeValue;
  }
};
