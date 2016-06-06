function Node(v, nodes) {
  this.val = v;
  this.nodes = nodes || [];
  this.visited = false;
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


function dfs(s) {
  s.visited = true;
  for(var i = 0; i < s.nodes.length; i++) {
    var v = s.nodes[i];
    if(!v.visited) {
      console.log(v.val)
      dfs(v);
    }
  }
}

dfs(s)
