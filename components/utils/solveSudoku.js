function solveSudoku(puzzle) {
  let solvedPuzzle = puzzle;

  depthFirstSearch(0, 0);

  function depthFirstSearch(row, column) {
    if (row === 9) return true;
    if (column === 9) return depthFirstSearch(row + 1, 0);
    if (puzzle[row][column] === ".") {
      for (let input = 1; input <= 9; input++) {
        if (isTileValid(row, column, `${input}`)) {
          puzzle[row][column] = `${input}`;
          if (depthFirstSearch(row, column + 1)) return true;
          puzzle[row][column] = ".";
        }
      }
    } else {
      return depthFirstSearch(row, column + 1);
    }
    return false;
  }
  function isTileValid(row, column, input) {
    if (isRowValid(column, input) == false) return false;
    if (isColumnValid(row, input) == false) return false;
    if (isBoxValid(row, column, input) == false) return false;
    return true;
  }

  function isRowValid(column, input) {
    for (let i = 0; i < 9; i++) if (puzzle[i][column] === input) return false;
  }
  function isColumnValid(row, input) {
    for (let j = 0; j < 9; j++) if (puzzle[row][j] === input) return false;
  }

  function isBoxValid(row, column, input) {
    let auxRow = row - (row % 3);
    let auxCol = column - (column % 3);
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (puzzle[auxRow + i][auxCol + j] === input) return false;
      }
    }
  }
}
