// Design a Data Structure SpecialStack that supports all the stack operations like push(), pop(), isEmpty(), isFull()
// and an additional operation getMin() which should return minimum element from the SpecialStack.
// All these operations of SpecialStack must be O(1).
// To implement SpecialStack, you should only use standard Stack data structure
// and no other data structure like arrays, list, .. etc.

class StackElement {
  constructor(data, currentMin) {
    this.data = data;
    this.currentMin = currentMin;
  }
}
class SpecialStack {
  constructor() {
    this.values = [];
    this.currentMin = Number.MAX_VALUE;
  }

  push(data) {
    this.currentMin = Math.min(this.currentMin, data);
    this.values.push(new StackElement(data, this.currentMin));
  }

  pop() {
    if (this.isEmpty()) {
      console.log("Special Stack is empty !");
      return null;
    }
    const popped = this.values.pop();
    if (!this.isEmpty()) {
      this.currentMin = this.values[this.values.length - 1].currentMin;
    } else {
      this.currentMin = Number.MAX_VALUE;
    }
    return popped;
  }

  isEmpty() {
    return !this.values.length;
  }

  isFull() {
    return false;
  }

  getMin() {
    if (this.isEmpty()) {
      console.log("Special Stack is empty !");
      return null;
    }
    return this.values[this.values.length - 1].currentMin;
  }
}

const ss = new SpecialStack();
ss.push(7);
ss.push(4);
ss.push(5);
ss.pop();
ss.pop();
ss.pop();
console.log(ss.currentMin);
