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

function postOrder(r) {
  var s = [];

  do {
    while(r) {
      if(r.right)
        s.push(r.right);

      s.push(r);

      r = r.left;
    }

    r = s.pop();


    if(r.right && r.right == s[s.length - 1]) {
      s.pop();
      s.push(r);
      r = r.right;
    } else {
      console.log(r.val)
    }


  } while(s.length > 0)
}

postOrder(a)
