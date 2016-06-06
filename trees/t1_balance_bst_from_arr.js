var arr = [1,2,3];
var arr = [8, 10, 12, 15, 16, 20, 25];


function Node(v) {
  this.val = v;
  this.left;
  this.right;

}

function balanceBST(arr, i, j) {

  if(i > j)
    return null;

  var mid = Math.floor((i + j) / 2);
  var r = new Node(arr[mid]);

  r.left = balanceBST(arr, i, mid - 1)
  r.right = balanceBST(arr, mid + 1, j)

  return r;
}

console.log(balanceBST(arr, 0, arr.length - 1))
