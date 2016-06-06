var dictionary = [
  "GEEKS",
  "FOR",
  "QUIZ",
  "GO"
]

var words = []

var board = [
  ["G", "I", "Z"],
  ["U", "E", "K"],
  ["Q", "S", "E"]
]

function findNeighbor(board, coord) {
  var possibilities = [
    [-1, -1],
    [-1, 0],
    [0, -1],
    [0, 1],
    [1, 0],
    [1, 1],
    [-1, 1],
    [1, -1]
  ]

  var options = []

  for(var i = 0; i < possibilities.length; i++) {
    var item = possibilities[i];
    var y = item[0];
    var x = item[1];

    var currY = y + coord[0];
    var currX = x + coord[1];

    if(currY >= 0 && currY < board.length
      && currX >= 0 && currX < board[0].length)
      options.push([currY, currX])
  }

  return options;


}

function isWord(dictionary, str) {
  return dictionary.indexOf(str) > -1
}


findWords(dictionary, board)
function findWords(dictionaryList, board, str) {
  for(var i = 0; i < board.length; i++) {
    for(var j = 0; j < board[i].length; j++){
      _findWords(dictionaryList, board, [i, j], board[i][j], {});
    }
  }
  console.log(words.length)
  console.log(words.join("\n"));
}

function _findWords(dictionaryList, board, coord, str, visited) {
  if(isWord(dictionary,str)) {
    words.push(str);
  }
  var item = coord.join(",")
  visited[item] = true;

  var options = findNeighbor(board, coord)
  for(var i = 0; i < options.length; i++) {
    var v = options[i];
    if(!visited[v.join(",")]) {
      visited[v.join(",")] = true;
      _findWords(dictionaryList, board, v, str + board[v[0]][v[1]], visited)
      delete visited[v.join(",")];
    }
  }
}

