const DoublyLinkedList = require("./doubly-linked-list");

const dll = new DoublyLinkedList();
dll.insertAtEnd(1);
dll.insertAtEnd(2);
dll.insertAtEnd(3);
dll.insertAtEnd(4);

dll.print();
dll.head = dll.reverse(dll.head);
dll.print();
