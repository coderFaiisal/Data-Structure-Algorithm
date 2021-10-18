// LIFO Data Structure.
class Stack {
  constructor() {
    this.stack = [];
  }
  add(item) {
    this.stack.push(item);
  }
  remove() {
    if (this.stack.length) {
      return this.stack.pop();
    }
  }
}
const guest = new Stack();
guest.add("Rohim");
guest.add("Rauf");
guest.add("Alamin");
guest.add("Mamun");
guest.add("Abdullah");
console.log(guest.stack);
const speaker = guest.remove();
console.log(speaker);
console.log(guest.stack);
