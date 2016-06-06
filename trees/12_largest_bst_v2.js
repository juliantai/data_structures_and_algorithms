function Node(val, left, right) {
  this.val = val;
  this.left = left;
  this.right = right;
}

var f = new Node(7);
var e = new Node(3);
var d = new Node(6, e, f);
var c = new Node(2);
var b = new Node(1, null, c);
var a = new Node(3, b, d);

function largestBST(n, min, max) {
  if(!n)
    return;

  if(n.val < min || n.val > max)
    return;

  var nn = new Node(n.val);

  nn.left = largestBST(n.left, min, n.val - 1);
  nn.right = largestBST(n.right, n.val + 1, max);

  return nn;
}

console.log(largestBST(a, Math.NEGATIVE_INFINITY, Math.POSITIVE_INFINITY))

