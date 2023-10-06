import { Queue } from "./Queue.mjs";

let queue = new Queue();

console.log("===== 구분 라인 =====");
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.front());
console.log(queue.front());

console.log("===== 구분 라인 =====");
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());

console.log(`isEmpty: ${queue.isEmpty()}`);