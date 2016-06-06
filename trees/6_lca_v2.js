function Node(v) {
  this.v = v;
  this.left;
  this.right;
}


var a = new Node(20);
var b = new Node(10);
var c = new Node(15);

c.left = b;
c.right = a;


function bst(n, v, arr) {
  if(!n) {
    return null;
  }

  arr.push(n.v);
  if(v === n.v) {
    return arr;
  }

  var left = null;
  var right = null;

  if(n.v > v) {
    left = bst(n.left, v, arr);
  }

  if(n.v < v) {
    right = bst(n.right, v, arr);
  }

  return left || right;


}

function lca(a1, a2) {

  if(!a1 || !a2)
    return null;
  console.log(a1, a2)
  var i = 0;
  var v;
  while(a1[i] && a2[i] && a1[i] === a2[i]) {
    v = a1[i];
    i++;
  }

  return v;
}

console.log(lca(bst(c, 10, []), bst(c, 20, [])))
