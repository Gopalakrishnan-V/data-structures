function search(mat, key) {
  const numRows = mat.length;
  const numColumns = mat[0].length;

  let i = numColumns - 1;
  let j = 0;

  while (i >= 0 && j <= numRows - 1) {
    if (mat[i][j] === key) {
      return `Element found at ${[i, j]}`;
    } else if (mat[i][j] > key) {
      i--;
    } else {
      j++;
    }
  }
  return "Element not found...";
}

const mat = [
  [10, 20, 30, 40],
  [15, 25, 35, 45],
  [27, 29, 37, 48],
  [32, 33, 39, 50]
];

console.log(search(mat, 56));
