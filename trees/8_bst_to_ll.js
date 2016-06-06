function LinkedList(val, next, prev) {
  this.val = val;
  this.next = next;
  this.prev = prev;
}

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


var nTail = null;
var nHead = null;

function inOrder(n) {
  if(!n)
    return

  inOrder(n.left)

  if(!nTail) {
    nTail = nHead = new LinkedList(n.val);
  } else {
    nTail.next = new LinkedList(n.val, null, nTail);
    nTail = nTail.next;
  }

  inOrder(n.right);

  return nHead;
}

