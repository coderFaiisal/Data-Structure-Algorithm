// FIFO Data Structure.
class Queue {
  constructor() {
    this.queue = [];
  }
  enqueue(item) {
    return this.queue.push(item);
  }
  dequeue() {
    if (this.queue.length) {
      return this.queue.shift();
    }
  }
}
const patients = new Queue();
patients.enqueue("Imam");
patients.enqueue("Ratul");
patients.enqueue("Rauf");
patients.enqueue("Sabbir");
console.log(patients.queue);
const winner = patients.dequeue();
console.log(winner);
console.log(patients.queue);
