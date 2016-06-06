function buildBoard(n, m) {
  var board = new Array(n);
  for(var i = 0; i < board.length; i++) {
    board[i] = new Array(m);
    for(var j = 0; j < board[i].length; j++) {
      board[i][j] = 0;
    }
  }

  return board;

}

var board = buildBoard(5, 8);

function possibleCoords(board, start) {
  // build 8 possiblities and prune the impossible ones;
  var c1 = [2, -2];
  var c2 = [1, -1];
  var sY = start[0];
  var sX = start[1];
  var boardY = board.length - 1;
  var boardX = board[0].length - 1;
  var coords = [];


  for(var i = 0; i < c1.length; i++) {
    for(var j = 0; j < c2.length; j++) {
      var y = c1[i];
      var x = c2[j];

      if(sY + y <= boardY && sY + y >= 0
          && sX + x <= boardX && sX + x >= 0) {
        coords.push([sY + y, sX + x]);
        coords.push([sX + x, sY + y]);
      }
    }
  }
  return coords;
}

function Node(coords, dist, path) {
  this.dist = dist;
  this.path = path || [coords];
  this.coords = coords;
  this.coordString = coords[0] + "," + coords[1];
}

function findShortestPath(board, start, end) {
  var n = new Node(start, 0)
  var q = [n];
  var visited = { "0,0": true }

  while(q.length > 0) {
    var v = q.shift();

    if(v.coords[0] === end[0] && v.coords[1] === end[1]) {
      console.log(v.path)
      return v.path;
    }

    var possibilities = possibleCoords(board, v.coords);

    for(var i in possibilities) {
      var w = possibilities[i];
      var wString = w[0] + "," + w[1];
      if(!visited[wString]) {
        visited[wString] = true;
        var wN = new Node(w, v.dist + 1)
        wN.path = v.path.concat(wN.path);
        q.push(wN)

      }
    }
    console.log(visited)
  }
}

findShortestPath(board, [0, 0], [0, 2])











