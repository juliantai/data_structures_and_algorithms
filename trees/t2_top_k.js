function Node(v) {
  this.val = v;
  this.left;
  this.right;
}

var a = new Node(1);
var b = new Node(2);
var c = new Node(3);
var d = new Node(4);
var e = new Node(5);
var f = new Node(6);
var g = new Node(7);

d.left = b;
b.right = c;
c.left = a;

d.right = f;
f.left = e;
f.right = g;

var arr = [];

function topK(n, k) {
  if(!n)
    return k;

  if(n.left)
    k = topK(n.left, k);
  else if(n.right)
    k = topK(n.right, k);

  k--;
  if(k >= 0){
    console.log(n.val);
    return k;
  } else {
    return -1;
  }

}

topK(d, 3);
