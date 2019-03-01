// Given an array of positive integers. All numbers occur even number of
// times except one number which occurs odd number of times.
// Find the number in O(n) time & constant space.

// Input : arr = {1, 2, 3, 2, 3, 1, 3}
// Output : 3

// Input : arr = {5, 7, 2, 7, 5, 2, 5}
// Output : 5

function getNumberOccuringOddTimes(arr) {
  const oddSet = new Set();
  arr.map(item => {
    if (!oddSet.has(item)) {
      oddSet.add(item);
    } else {
      oddSet.delete(item);
    }
  });
  return [...oddSet][0];
}

const arr = [5, 7, 2, 7, 5, 2, 5];
console.log("Result: ", getNumberOccuringOddTimes(arr));
