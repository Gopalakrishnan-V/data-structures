class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  
  swap(arr, x, y){
      const temp = arr[x];
      arr[x] = arr[y];
      arr[y] = temp;
  }

  insert(data) {
    this.values.push(data);
    this.bubbleUp();
  }

  bubbleUp(){
    let index = this.values.length - 1;
    while(index>0){
        const parentIndex = Math.floor((index-1)/2);
        if(this.values[index]<= this.values[parentIndex]){
            break;
        }
        else{
            this.swap(this.values, index, parentIndex);
            index = parentIndex;
        }
    }
  }
}

let maxBinaryHeap = new MaxBinaryHeap();
maxBinaryHeap.insert(1);
maxBinaryHeap.insert(2);
maxBinaryHeap.insert(3);
maxBinaryHeap.insert(4);
maxBinaryHeap.insert(5);
console.log(maxBinaryHeap.values);

