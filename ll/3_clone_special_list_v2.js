var Node = function(value, next, rPointer) {
  this.value = value;
  this.next = next;
  this.rPointer;
}
var n5 = new Node(5, null);
var n4 = new Node(4, n5)
var n3 = new Node(3, n4)
var n2 = new Node(2, n3)
var n1 = new Node(1, n2);
n1.rPointer = n3;
n3.rPointer = n5;
n4.rPointer = n3;
n5.rPointer = n2;
n2.rPointer = n1;


// first dupe new nodes in between each current node

function cloneNext(ll) {
  var curll = ll;
  while(curll) {
    curll.next = new Node(curll.value, curll.next);
    curll = curll.next.next;
  }

  return ll;

}


function cloneRPointer(ll) {
  var curll = ll;
  while(curll) {
    curll.next.rPointer = curll.rPointer.next;
    curll = curll.next.next;
  }
  return ll;
}

function stripCloned(ll) {
  var curll = ll;
  var curOriginal
  var original;
  var curClone;
  var clone;

  original = curOriginal = curll;
  clone = curClone = curll.next
  curll = curll.next.next;

  while(curOriginal) {
    curOriginal.next = curOriginal.next.next;
    try {
      curClone.next = curClone.next.next
    } catch(e) {
      curClone.next = null;
    }
    curOriginal = curOriginal.next;
    curClone = curClone.next;
  }

  console.log(original)
  console.log(clone)


}

var ll = cloneNext(n1);

var dupedll = cloneRPointer(ll);
// console.log(dupedll)
stripCloned(dupedll)
