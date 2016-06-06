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

console.log(clone(a, null));

function clone(r, nr) {
  if(!r) return;

  if(!nr)
    nr = new Node(r.val);

  if(r.left)
    nr.left = new Node(r.left.val);

  if(r.right)
    nr.right = new Node(r.right.val);

  clone(r.left, nr.left)
  clone(r.right, nr.right)

  return nr
}
