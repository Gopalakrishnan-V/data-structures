function printUniqueRows(mat) {
  const set = new Set();
  for (let i = 0; i < mat.length; i++) {
    const row = mat[i].join("");
    if (!set.has(row)) {
      console.log(row);
    }
    set.add(row);
  }
}

const mat = [
  [0, 1, 0, 0, 1],
  [1, 0, 1, 1, 0],
  [0, 1, 0, 0, 1],
  [1, 1, 1, 0, 0]
];

printUniqueRows(mat);
