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



  // check left of column;
  for(var i = 0; i < col; i++) {
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

nQueens(4);
function nQueens(size) {
  var board = genBoard(size);
  nQueenSolver(board, 0)

}


function nQueenSolver(board, x) {

  for(var i = 0; i < board.length; i++) {
    var currY = i;
    if(canPlace(board, currY, x)) {
      board[currY][x] = 1;
      if(x === board.length - 1) {
        console.log(board)
      } else {
        nQueenSolver(board, x + 1);
      }
      board[currY][x] = 0;
    }
  }
}
