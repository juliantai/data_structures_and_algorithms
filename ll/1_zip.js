// Do extra credit?

var Node = function(value, next) {
  this.value = value;
  this.next = next;
}

function createNodes(n) {
  var currNode;
  var lastNode;
  for(var i = n; i > 0; i--) {
    if(i === n) {
      currNode = new Node(i, null);
    } else {
      currNode = new Node(i, lastNode);
    }
    lastNode = currNode;
  }

  return currNode;
}


function getLinkedListLength(firstNode) {

  var i = 0;
  var currNode = firstNode;

  while(currNode) {
    currNode = currNode.next;
    i++;
  }
  return i;

}

function linkedListHalf(length) {
  return Math.ceil(length / 2);
}

function linkedListHalves(half, firstNode) {
  var front = firstNode;
  var back = firstNode;


  var i = 0;
  while(i < half - 1) {
    back = back.next;
    i++;
  }

  var temp = back.next;
  back.next = null;
  back = temp;

  return { front: front, back: back }
}

function linkedListReverse(head) {
  var curr = head;
  var prev = null;

  while(curr) {
    var temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  return prev;
}

function linkedListZip(halves, length) {
  var currFront = halves.front.next;
  var currBack = halves.back;
  var front = halves.front;

  while(currFront) {
    front.next = currBack;
    currBack = currBack.next;
    front = front.next;

    front.next = currFront;
    currFront = currFront.next;
    front = front.next;
  }

  return halves.front;
}


function Zip(pList) {

  var length = getLinkedListLength(pList);
  var half = linkedListHalf(length);
  var llHalves = linkedListHalves(half, pList)
  llHalves.back = linkedListReverse(llHalves.back);
  var llZipped = linkedListZip(llHalves, half);

  while(llZipped && llZipped.next){
    console.log(llZipped.value)
    llZipped = llZipped.next
  }

}


var list = createNodes(7)
Zip(list);
