function Node(v) {
  this.val = v;
  this.left;
  this.right;
}

var a = new Node(5);
var b = new Node(5);
var c = new Node(5);
var d = new Node(5);
var e = new Node(5);
var f = new Node(5);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;


function search(n) {
  if(!n)
    return 0;

  var l = search(n.left);
  var r = search(n.right);

  return l + r + 1;
}

console.log(search(a))
