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

function mirror(r) {
  if(!r)
    return;

  mirror(r.left);
  mirror(r.right);

  var temp = r.left;
  r.left = r.right;
  r.right = temp;

  return r;
}

console.log(mirror(a))
