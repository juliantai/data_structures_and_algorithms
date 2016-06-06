function Node(val, left, right) {
  this.val = val;
  this.left = left;
  this.right = right;
}

var g = new Node(9)
var f = new Node(7);
var e = new Node(8);
var d = new Node(4);
var c = new Node(3);
var b = new Node(2);
var a = new Node(5);

a.left = c;
a.right = e;
c.left = b;
c.right = d;
e.left = f;
e.right = g;

function preorder(r) {
  if(!r)
    return;

  var s = [r]

  while(s.length > 0) {
    r = s.pop();

    console.log(r.val);

    if(r.right)
      s.push(r.right);

    if(r.left) {
      s.push(r.left);
    }
  }
}

preorder(a)
