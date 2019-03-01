function reverse(arr) {
  if (!arr.length) {
    return;
  }

  let l = 0;
  let r = arr.length - 1;
  while (l < r) {
    const temp = arr[l];
    arr[l] = arr[r];
    arr[r] = temp;
    l++;
    r--;
  }
}

const arr = [1, 2, 3];
console.log("Before Reverse: ", arr);

reverse(arr);
console.log("After Reverse: ", arr);
