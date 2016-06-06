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


var i = new iterator(a);
i.init();
console.log(i.next())


function iterator(n) {
  var s = []
  var n = n;

  this.init = function() {
    this.pushLeft(n);
  }

  this.pushLeft = function(n) {
    var curr = n;
    while(curr) {
      s.push(curr);
      curr = curr.left;
    }
  }

  this.hasNext = function() {
    return !!s.length;
  }

  this.next = function() {
    var temp = s.pop();
    this.pushLeft(temp.right);
    return temp.val;
  }

}
