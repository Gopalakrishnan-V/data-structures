function binarySearch(arr, start, end, key) {
  if (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (key === arr[mid]) {
      return mid;
    } else if (key < arr[mid]) {
      return binarySearch(arr, start, mid - 1, key);
    } else if (key > arr[mid]) {
      return binarySearch(arr, mid + 1, end, key);
    }
  }
  return -1;
}

function searchInSortedAndRotated(arr, key) {
  if (arr[0] === key) {
    return 0;
  }

  const n = arr.length;

  for (let i = 1; i < n; i++) {
    if (arr[i] === key) {
      return i;
    }
    if (arr[i] < arr[i - 1]) {
      if (key >= arr[0]) {
        return binarySearch(arr, 0, i - 1, key);
      } else {
        return binarySearch(arr, i, n - 1, key);
      }
    }
  }
  return -1;
}

const arr = [3, 4, 5, 1, 2];
console.log("Result: ", searchInSortedAndRotated(arr, 1));
