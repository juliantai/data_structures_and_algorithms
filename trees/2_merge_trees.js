
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
var a = new Node(3, b, null);



function Spinify() {
  var spine = null;
  var currSpine = null;

  this.inOrder = function(n) {
    if(!n) return;

    this.inOrder(n.right)


    console.log(n.val)

    if(!spine)
      currSpine = spine = new Node(n.val);
    else {
      currSpine.left = new Node(n.val);
      currSpine = currSpine.left;
    }

    this.inOrder(n.left)
    return spine;


  }
}
var s = new Spinify()
var spine1 = s.inOrder(d)

var s2 = new Spinify()
var spine2 = s2.inOrder(a)


function merge(s1, s2) {

}
