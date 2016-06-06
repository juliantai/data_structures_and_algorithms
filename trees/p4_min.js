function Node(val, left, right) {
  this.val = val;
  this.left = left;
  this.right = right;
}

var g = new Node(-1)
var f = new Node(7);
var e = new Node(5);
var d = new Node(6, e, f);
var c = new Node(2, g, null);
var b = new Node(1, null, c);
var a = new Node(3, b, d);

function minBST(r) {
  if(!r.left)
    return r.val

  return minBST(r.left);
}

// console.log(minBST(a, a.val));


function findMin(r) {
  var min = r.val;
  if(r.left) {
    lmin = findMin(r.left);
    if(min > lmin)
      min = lmin
  }

  if(r.right) {
    var rmin = findMin(r.right);
    if(min > rmin)
      min = rmin
  }

  return min;

}

console.log(findMin(a, a.val))


function minBT(n) {
  if(!n) return;

  var min = n.val;

  var lmin = minBT(n.left);
  var rmin = minBT(n.right);

  if(lmin && lmin < min)
    min = lmin.val;

  if(rmin && rmin < min)
    min = rmin.val;

  return min


}
