function printInSpiralForm(mat) {
  let startingRowIndex = 0;
  let startingColIndex = 0;
  let endingRowIndex = mat.length;
  let endingColIndex = mat[0].length;

  while (
    startingRowIndex < endingRowIndex &&
    startingColIndex < endingColIndex
  ) {
    for (let i = startingColIndex; i < endingColIndex; i++) {
      process.stdout.write(mat[startingRowIndex][i] + ",");
    }
    startingRowIndex++;

    for (let i = startingRowIndex; i < endingRowIndex; i++) {
      process.stdout.write(mat[i][endingColIndex - 1] + ",");
    }
    endingColIndex--;

    if (startingRowIndex < endingRowIndex) {
      for (let i = endingColIndex - 1; i >= startingColIndex; i--) {
        process.stdout.write(mat[endingRowIndex - 1][i] + ",");
      }
      endingRowIndex--;
    }

    if (startingColIndex < endingColIndex) {
      for (let i = endingRowIndex - 1; i >= startingRowIndex; i--) {
        process.stdout.write(mat[i][startingColIndex] + ",");
      }
      startingColIndex++;
    }
  }
}

const mat = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25]
];

printInSpiralForm(mat);
