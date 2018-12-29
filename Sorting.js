class BubbleSort {
  sort(arr) {
    const n = arr.length;
    for (let i = n; i > 0; i--) {
      let noSwaps = true;
      for (let j = 0; j < i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          noSwaps = false;
        }
      }
      if (noSwaps) {
        return arr;
      }
    }
    return arr;
  }
}

class SelectionSort {
  sort(arr) {
    const n = arr.length;
    for (let i = 0; i < n; i++) {
      let lowest = i;
      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[lowest]) {
          lowest = j;
        }
      }
      if (lowest !== i) {
        const temp = arr[lowest];
        arr[lowest] = arr[i];
        arr[i] = temp;
      }
    }
    return arr;
  }
}

class InsertionSort {
  sort(arr) {
    const n = arr.length;
    for (let i = 1; i < n; i++) {
      const key = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = key;
    }
    return arr;
  }
}

class MergeSort {
  merge(arr1, arr2) {
    let results = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        results.push(arr1[i]);
        i++;
      } else {
        results.push(arr2[j]);
        j++;
      }
    }

    while (i < arr1.length) {
      results.push(arr1[i]);
      i++;
    }
    while (j < arr2.length) {
      results.push(arr2[j]);
      j++;
    }
    return results;
  }

  sort(arr) {
    const n = arr.length;
    if (n <= 1) {
      return arr;
    }
    const mid = Math.floor(n / 2);
    const left = this.sort(arr.slice(0, mid));
    const right = this.sort(arr.slice(mid));
    return this.merge(left, right);
  }
}

class QuickSort {
  getPivotIndex(arr, start, end) {
    const swap = (arr, x, y) => {
      const temp = arr[x];
      arr[x] = arr[y];
      arr[y] = temp;
    };

    const pivot = arr[start];
    let swapIndex = start;

    for (let i = start + 1; i <= end; i++) {
      if (pivot > arr[i]) {
        swapIndex++;
        swap(arr, swapIndex, i);
      }
    }
    swap(arr, start, swapIndex);
    return swapIndex;
  }

  sort(arr, start = 0, end = arr.length - 1) {
    if (start < end) {
      const pivotIndex = this.getPivotIndex(arr, start, end);
      this.sort(arr, start, pivotIndex - 1);
      this.sort(arr, pivotIndex + 1, end);
    }
    return arr;
  }
}

// let bubbleSort = new BubbleSort();
// console.log("Bubble Sort:", bubbleSort.sort([5, 4, 3, 2, 1]));

// let selectionSort = new SelectionSort();
// console.log("Selection Sort:", selectionSort.sort([7, 1, 2, 7]));

// let insertionSort = new InsertionSort();
// console.log("Insertion Sort:", insertionSort.sort([5, 4, 3, 2, 1]));

// let mergeSort = new MergeSort();
// console.log("Merge Sort:", mergeSort.sort([5, 4, 3, 2, 1]));

let quickSort = new QuickSort();
console.log("Quick Sort:", quickSort.sort([100, -3, 2, 4, 6, 9, 1, 2, 5, 3, 23]));
