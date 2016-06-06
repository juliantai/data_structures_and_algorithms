// given a double link list

// forward linked list points to next in sequential order
// reversed ll pointer is random

// duplicate the list

var Node = function(value, next, rPointer) {
  this.value = value;
  this.next = next;
  this.rPointer = rPointer;
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



function dupeNext(list) {
  var duped = new Node(list.value);
  var prev = duped;

  while(list && list.next) {
    list = list.next
    var next = new Node(list.value);
    prev.next = next;
    prev = prev.next;
  }
  return duped;
}

var dList = dupeNext(n1);
dList = dupeRPointer(n1, dList);
// console.log(dList)
function dupeRPointer(list, dList) {
  var dTemp = dList;
  var dCurr = dList;

  while(list) {

    console.log(list)
    list = list.next;

  }

  return dList;
}
