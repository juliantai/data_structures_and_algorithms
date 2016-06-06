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


function postOrder(r) {
  var s1 = [r];
  var s2 = [];

  while(r = s1.pop()) {
    if(r.left)
      s1.push(r.left);

    if(r.right)
      s1.push(r.right);

    s2.push(r.val)
  }


  while(s2.length > 0) {
    console.log(s2.pop())
  }
}

postOrder(a)

// recursive
function postOrderR(r) {
  if(!r)
    return r;

  postOrderR(r.left);
  postOrderR(r.right);
  console.log(r.val);
}

postOrderR(a)
