class TwoStacks {
  constructor(n) {
    this.arr = new Array(n);
    this.top1 = -1;
    this.top2 = n;
  }

  push1(value) {
    if (this.top1 === this.top2 - 1) {
      console.log("Stack Overflow");
      return;
    }
    this.arr[++this.top1] = value;
  }

  push2(value) {
    if (this.top1 === this.top2 - 1) {
      console.log("Stack Overflow");
      return;
    }
    this.arr[--this.top2] = value;
  }

  pop1() {
    if (this.top1 === -1) {
      return undefined;
    }
    return this.arr[this.top1--];
  }
  pop2() {
    if (this.top2 === this.arr.length) {
      return undefined;
    }
    return this.arr[top2++];
  }
}

const twoStacks = new TwoStacks(3);
// twoStacks.push1(1);
// twoStacks.push1(2);
