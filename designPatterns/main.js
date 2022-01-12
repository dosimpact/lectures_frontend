// import { LinkedList } from "./ds/LinkedList";

const { LinkedList } = require("./ds/LinkedList");

const linkedList = new LinkedList();

linkedList.insertFirst(100);
linkedList.insertFirst(200);
linkedList.insertFirst(300);
linkedList.insertLast(400);
linkedList.printListData(); // [300,200,100,400]

linkedList.insertAt(500, 1);
linkedList.printListData(); // [300,500,200,100,400]

linkedList.removeAt(2);
linkedList.printListData(); // [300,500,100,400]

linkedList.getAt(2); // 100

console.log(linkedList);
// LinkedList {
//     head: Node { data: 300, next: Node { data: 500, next: [Node] } },
//     size: 4
//   }
linkedList.clearList();
console.log(linkedList); // LinkedList { head: null, size: 0 }
