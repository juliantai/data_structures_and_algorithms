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

insert(a, -1)

function insert(r, v) {

  if(v > r.val) {
    if(r.right)
      insert(r.right, v)
    else
      r.right = new Node(v)
  }

  if(v < r.val) {
    if(r.left)
      insert(r.left, v);
    else
      r.left = new Node(v)
  }
}


function ins(n, v) {
  if(!n) return new Node(v);

  if(v < n.val)
    n.left = ins(n.left, v);

  if(v > n.val)
    n.right = ins(n.right, v);

  return n
}

ins(a, -1)

console.log(a)
