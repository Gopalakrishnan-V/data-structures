// Write a function which takes an array and prints the majority element (if it exists),
// otherwise prints “No Majority Element”. A majority element in an array A[] of size n is an element
// that appears more than n/2 times (and hence there is at most one such element).

// Input : {3, 3, 4, 2, 4, 4, 2, 4, 4}
// Output : 4

// Input : {3, 3, 4, 2, 4, 4, 2, 4}
// Output : No Majority Element

function getMajorityElement(arr) {
  const n = arr.length;
  const keyCountMap = {};

  for (let i = 0; i < n; i++) {
    const item = arr[i];
    keyCountMap[item] = keyCountMap[item] ? keyCountMap[item] + 1 : 1;
    if (keyCountMap[item] > Math.floor(n / 2)) {
      return item;
    }
  }

  return "No Majority Element";
}

const arr = [3, 3, 4, 2, 4, 4, 2, 4];
console.log("Result: ", getMajorityElement(arr));
