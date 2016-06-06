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


function findPath(n, v, arr) {
  if(!n)
    return;

  arr.push(n.val);

  if(n.val === v)
    return

  if(n.val < v && !n.right) {
    while(arr.length > 0)
      arr.pop()
  }

  if(n.val > v)
    findPath(n.left, v, arr)

  if(n.val < v)
    findPath(n.right, v, arr)

  return arr;

}

console.log(lca(findPath(a, 1, []), findPath(a, 7, [])))
function lca(arr, arr2) {
  var stack = []
  var i = 0;
  while(i < arr.length) {
    if(arr[i] === arr2[i])
      stack.push(arr[i])

    i++
  }

  return stack.pop()


}


