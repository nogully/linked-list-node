import Node from './Node';

export default class LinkedList {
  constructor () {
    this.length = 0;
    this.head = null;
  }

  unshift(data) {
    let node = new Node(data)
   
    this.length++;

    if (this.head === null) {
      this.head = node;
    } else { 
      node.next = this.head;
      this.head = node;
    }
    return;
  }

  shift() {
    if (this.length === 0) {
      return null;
    } else {
      this.length--;

      let oldHead = this.head;
      this.head = oldHead.next;

    return oldHead;
    }
  }

  push(data) {
    let node = new Node(data);
    let current = this.head;
    this.length++;

    if (current === null) {
      this.head = node;
      return;
    } 

    while (current.next !== null) {
      current = current.next;
    }

    current.next = node;
    return;
  }

  pop() {
    let current = this.head;

    if (this.length === 0) {
      return null;
    }

    if (this.length === 1) {
      let last = this.head;
      this.head = null;
      this.length--;
      return last;
    }

    while (current.next !== null) {
      var previous = current;
      current = current.next;
    }
    
    previous.next = null;
    this.length--;
    return current;
  }
}

