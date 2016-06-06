function Node(v) {
  this.val = v;
  this.children = [];
}

var a = new Node(1);
var b = new Node(2);
var c = new Node(3);
var d = new Node(4);
var e = new Node(5);
var f = new Node(6);
var g = new Node(7);

a.children = [b,c,d];
b.children = [e];
e.children = [f];
f.children = [g];


function findHeight(r, count) {
  if(!r)
    return;

  for(var i = 0; i < r.children.length; i++) {
    return findHeight(r.children[i], count + 1)
  }
  return count;
}

console.log(findHeight(a, 1))
