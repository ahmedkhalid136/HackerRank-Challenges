function diagonalDifference(arr: number[][]) {
  const sumOfPrimaryDiagonal = calculatePrimaryDiagonal(arr);
  const sumOfSecondaryDiagonal = calculateSecondaryDiagonal(arr);
  const diagonalDifference = Math.abs(sumOfPrimaryDiagonal - sumOfSecondaryDiagonal)
  console.log("Primary Diagonal", sumOfPrimaryDiagonal);
  console.log("Secondary Diagonal", sumOfSecondaryDiagonal);
  console.log("Diagonal Difference", diagonalDifference)
  return diagonalDifference;
}

function calculatePrimaryDiagonal(arr: number[][]) {
  const column = arr.length;
  let sum = 0;
  let rows = 0;
  for (var i = 0; i < column; i++) {
    sum += arr[i][rows];
    rows += 1;
  }
  return sum;
}

function calculateSecondaryDiagonal(arr: number[][]) {
  const column = arr.length;
  let sum = 0;
  let rows = arr.length - 1;
  for (var i = 0; i < column; i++) {
    sum += arr[i][rows];
    rows -= 1;
  }
  return sum;
}

let arr = [
  [1, 2, 5],
  [3, 4, 9],
  [5, 6, 10],
];

diagonalDifference(arr);
