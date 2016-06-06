nQueens(4);
function nQueens(size) {
  var board = genBoard(size);
  nQueenSolver(board, 0)
  console.log(board);
}

function genBoard(size) {
  var arr = new Array(size);
  var rows = new Array(size);

  for(var i = 0; i < size; i++) {
    rows[i] = 0;
  }

  for(var i = 0; i < size; i++) {
    arr[i] = rows.slice(0);
  }

  return arr;
}

function canPlace(board, row, col) {



  // check left of row;
  for(var i = row; i < col; i++) {
    if(board[row][i] === 1)
      return false;
  }

  // check upper left diagonal;
  for(var i = row, j = col; i >= 0 && j >= 0; i--, j--) {
    if(board[i][j] === 1)
      return false;
  }

  // check lower left diagonal;
  for(var i = row, j = col; i < board.length && j >= 0; i++, j--) {
    if(board[i][j] === 1)
      return false;
  }
  return true;
}

function nQueenSolver(board, col) {
  console.log("called")
  if(col >= board.length){
    return true;
  }

  for(var i = 0; i < board.length; i++) {
    if(canPlace(board, i, col)) {
      board[i][col] = 1;

      if(nQueenSolver(board, col + 1)) {
        return true;
      }

      board[i][col] = 0;
    }
  }


  return false;

  // console.log(board[0][0] = 1);
  // console.log(canPlace(board, 4, 3));
}


