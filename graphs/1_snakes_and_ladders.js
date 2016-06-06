var game = new Array(30);
for(var i = 0; i < game.length; i++) {
  game[i] = -1;
}
game[2] = 21;
game[4] = 7;
game[10] = 25;
game[19] = 28;

// Snakes
game[26] = 0;
game[20] = 8;
game[16] = 3;
game[18] = 6;

function Node(val, dist) {
  this.val = val;
  this.dist = dist;
}
function snakesAndLadders(game) {
  var n = new Node(0, 0);
  var q = [n];
  var visited = { 0: true }
  var lastIndex = game.length - 1;

  while(q.length > 0) {
    var v = q.shift();

    if(v.val === game.length - 1)
      return v.dist;

    for(var i = v.val; i < v.val + 7 && i < game.length; i++) {
      var w = i;

      if(!visited[w]) {
        visited[w] = true;
        var node = new Node(w, v.dist + 1)

        if(game[w] > -1) {
          w = game[w]
          if(!visited[w]) {
            visited[w] = true;
            node.val = w;
          }
        }
        q.push(node)
      }

    }

  }
}
console.log(snakesAndLadders(game))
