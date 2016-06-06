function Node(val, left, right) {
  this.val = val;
  this.left = left;
  this.right = right;
}


var f = new Node(7);
var e = new Node(5);
var d = new Node(6, e, f);
var c = new Node(2);
var b = new Node(1, null, c);
var a = new Node(3, b, d);


function clone(n) {
  if(!n)
    return;

  var nn = new Node2(n.val);
  nn.left = clone(n.left);
  nn.right = clone(n.right);

  return nn;
}

console.log(clone(a))
