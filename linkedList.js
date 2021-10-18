// Linked List Data Structure
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor(head) {
    this.head = head;
  }
  add(value) {
    const newNode = new Node(value);
    let current = this.head;
    while (current.next != null) {
      current = current.next;
    }
    current.next = newNode;
  }
}
const head = new Node(100);
const listItem = new LinkedList(head);
listItem.add(200);
listItem.add(20);
listItem.add(400);
console.log(JSON.stringify(listItem));
