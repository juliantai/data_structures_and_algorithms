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

var val = largestBst(a, null)
console.log(val)
function largestBst(n, n2) {

  if(!n2)
    n2 = new Node(n.val);


  if(n.left && n.left.val < n.val) {
    n2.left = new Node(n.left.val);
    largestBst(n.left, n2.left);
  }

  if(n.right && n.right.val > n.val) {
    n2.right = new Node(n.right.val);
    largestBst(n.right, n2.right);
  }

  return n2;

}
