var matrix = [
  [1,1,1,1],
  [1,1,1,1],
  [1,1,0,1]
]

console.log(numberOfPaths(matrix, 3, 4, 0, 0, 0))
function numberOfPaths(matrix, n, m, y, x) {

  if(y === n - 1 && x === m - 1) {
    return 1;
  }

  if(y === n)
    return 0;

  if(x === m)
    return 0;

  if(matrix[y][x] === 0)
    return 0;

  var left;
  var right;



  left = numberOfPaths(matrix, n, m, y + 1, x)
  right = numberOfPaths(matrix, n, m, y, x + 1)

  return left + right;
}
