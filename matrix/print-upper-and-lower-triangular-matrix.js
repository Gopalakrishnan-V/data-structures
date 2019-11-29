function getUpperAndLower(mat) {
  const numRows = mat.length;
  const numColumns = mat[0].length;

  let lower = [];
  for (let i = 0; i < numRows; i++) {
    lower[i] = [];
    for (let j = 0; j < numColumns; j++) {
      lower[i][j] = j <= i ? mat[i][j] : 0;
    }
  }

  let upper = [];
  for (let i = 0; i < numRows; i++) {
    upper[i] = [];
    for (let j = 0; j < numColumns; j++) {
      upper[i][j] = j >= i ? mat[i][j] : 0;
    }
  }

  return { lower, upper };
}

const mat = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const results = getUpperAndLower(mat);

console.log("Lower");
for (let i = 0; i < mat.length; i++) {
  console.log(results.lower[i].join(" "));
}

console.log("\nUpper");
for (let i = 0; i < mat.length; i++) {
  console.log(results.upper[i].join(" "));
}
