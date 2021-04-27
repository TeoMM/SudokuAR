//array input type
//070000043040009610800634900094052000358460020000800530080070091902100005007040802

function solveSudoku(puzzle) {
  let solvedPuzzle = puzzle;
  function depthFirstSearch(row, column) {
    if (row === 9) return true;
    if (column === 9) return dfs(row + 1, 0);
    if (solvedPuzzle[row][column]) {
      //TODO logic
    }
  }

  function isTileValid(row, column, input) {
    if (
      isRowInvalid(column, input) == false &&
      isColumnInvalid(row, input) == false &&
      isBoxInvalid(row, column, input) == false
    ) {
      return true;
    } else {
      return false;
    }
  }

  function isRowInvalid(column, input) {
    for (let i = 0; i < 9; i++) {
      if (solvedPuzzle[i][column] === input) return false;
    }
  }
  function isColumnInvalid(row, input) {
    for (let j = 0; j < 9; j++) {
      if (solvedPuzzle[row][j] === input) return false;
    }
  }

  function isBoxInvalid(row, column, input) {
    let auxRow = row - (row % 3);
    let auxCol = column - (column % 3);
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (solvedPuzzle[auxRow + i][auxCol + j] === input) return false;
      }
    }
  }
}
