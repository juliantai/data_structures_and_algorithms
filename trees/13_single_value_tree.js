function Node(val, left, right) {
  this.val = val;
  this.left = left;
  this.right = right;
}

var f = new Node(5);
var e = new Node(5);
var d = new Node(5, e, f);
var c = new Node(5);
var b = new Node(5, null, c);
var a = new Node(5, b, d);

var counter = 0;

function singleValueTree(n) {

  if(n.left)
    var l = singleValueTree(n.left);

  if(n.right)
    var r = singleValueTree(n.right);


  if(!n.left && !n.right) {
    counter++
    return true;
  } else if(l && ) {

    counter++
    return true;
  }



}

//OMG IM STUCK

singleValueTree(e)
console.log(counter)
