function getPairWithkSum(arr, k) {
  const set = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (set.has(k - arr[i])) {
      return [arr[i], k - arr[i]];
    }
    set.add(arr[i]);
  }
  return [];
}

const arr = [1, 4, 45, 6, 10, -8];
console.log("Result: ", getPairWithkSum(arr, 16));
