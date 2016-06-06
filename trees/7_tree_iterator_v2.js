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


var head;


function dll(n) {
  if(!n)
    return;



  console.log("left ",dll(n.left));

  console.log("right ", dll(n.right));

  return n.val
}

dll(a)


