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

function total(r, sum) {
  if(!r) return 0;

  var t1 = total(r.left, sum);
  var t2 = total(r.right, sum);
  return r.val + t1 + t2;
}

console.log(total(a, 0))
