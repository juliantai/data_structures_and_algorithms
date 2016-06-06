var m = [
 [0,1,1,0,1],
 [1,1,0,1,0],
 [0,1,1,1,0],
 [1,1,1,1,0],
 [1,1,1,1,1],
 [0,0,0,0,0]
]

console.log(findSubMatrix(m))

function findSubMatrix(m) {
  m = zeroFillMatrix(m)
  var max = 0;
  for(var i = 1; i < m.length; i++) {
    for(var j = 1; j < m[i].length; j++) {
      var diag = m[i - 1][j - 1];
      var left = m[i][j - 1];
      var top = m[i - 1][j];
      var min = Math.min(diag, left, top);
      m[i][j] = min + m[i][j];
      if(m[i][j] > max)
        max = m[i][j];
    }
  }
  return max;
}

function zeroFillMatrix(m) {
  var len = m[0].length;
  var arr = [];
  for(var i = 0; i < len; i++)
    arr[i] = 0;

  m.unshift(arr);

  for(var i = 0; i < m.length; i++)
    m[i].unshift(0);

  return m;
}
