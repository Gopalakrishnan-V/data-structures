function getMissingNumber(arr) {
  const n = arr.length;
  const expectedSum = ((n + 1) * (n + 2)) / 2;
  let actualSum = 0;
  arr.map(item => {
    actualSum += item;
  });
  return expectedSum - actualSum;
}

const arr = [1, 2, 4, 5, 6];
console.log("Result: ", getMissingNumber(arr));
