function Node(v, nodes) {
  this.val = v;
  this.nodes = nodes || [];
  this.visited = false;
}

var a = new Node("a");
var b = new Node("b");
var c = new Node("c");
var d = new Node("d");

a.nodes = [b];
b.nodes = [c, d, a];

console.log(detectCycle(a, {}))

function detectCycle(a, current) {
  a.visited = true;
  current[a.val] = true;
  var hasCycle = false;
  for(var i = 0; i < a.nodes.length; i++) {
    var v = a.nodes[i];

    if(current[v.val]) {
      return true
    }
    if(!v.visited) {
      hasCycle = detectCycle(v, current)
    }

  }

  // backtrack
  delete current[a.val];
  return hasCycle;
}
