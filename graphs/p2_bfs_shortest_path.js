function Node(v, nodes) {
  this.val = v;
  this.nodes = nodes || [];
}

var s = new Node("s");
var a = new Node("a");
var b = new Node("b");
var c = new Node("c");
var d = new Node("d");
var e = new Node("e");



s.nodes = [a, b];
a.nodes = [s, c];
b.nodes = [s, c, d];
c.nodes = [a, d, e];
d.nodes = [b, c, e];
e.nodes = [c, d];

function bfs(s) {
  var q = [s];
  var visited = { "s": "0" };

  while(q.length > 0) {
    var v = q.pop();

    for(var i = 0; i < v.nodes.length; i++) {
      var w = v.nodes[i];

      if(!visited[w.val]) {
        visited[w.val] = parseInt(visited[v.val]) + 1 + "";
        q.push(w);
      }

    }

  }

}

bfs(s)
