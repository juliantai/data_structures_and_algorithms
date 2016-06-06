// find bst the trick to not recalculate the min/max is to limit and pass in

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



function isBst(r, min, max) {
  if(!r) return true;

  var left = isBst(r.left, min, r.val);
  var right = isBst(r.right, r.val, max);

  if(left && right && r.val > min && r.val < max) {
    return true;
  }

  return false;

}

console.log(isBst(null, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY))
console.log(isBst(f, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY))
console.log(isBst(a, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY))
