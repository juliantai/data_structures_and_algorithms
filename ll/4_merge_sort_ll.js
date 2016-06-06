function LinkedListNode(node_value) {
    this.val = node_value;
    this.next = null;
}

function _insert_node_into_singlylinkedlist(head, val) {
    if(head == null) {
        head = new LinkedListNode(val);
    }
    else {
        var end = head;
        while (end.next != null) {
            end = end.next;
        }
        var node = new LinkedListNode(val);
        end.next = node;
    }
    return head;
}


var n6 = _insert_node_into_singlylinkedlist(null, 6)
var n5 = _insert_node_into_singlylinkedlist(n6, 5)
var n4 = _insert_node_into_singlylinkedlist(n6, 4)
var n3 = _insert_node_into_singlylinkedlist(n6, 3)
var n2 = _insert_node_into_singlylinkedlist(n6, 2)
var n1 = _insert_node_into_singlylinkedlist(n6, 1)


// write the pivot and mergesort
var mm = mergeSortll(n6, len(n6));


function mergeSortll(ll, len) {
  if(len === 1 || len === 0) return ll;
  var currll = ll;
  var pivot = Math.floor(len / 2);
  var front = ll;
  var back;

  var i = 1;
  while(i < pivot) {
    currll = currll.next;
    i++;
  }
  back = currll.next;
  currll.next = null;

  var f = mergeSortll(front, pivot)
  var b = mergeSortll(back, len - pivot)
  console.log(f)
  console.log(b)
  var m = mergell(f, b);

  return m

}

function len(ll) {
  var i = 0;
  while(ll) {
    ll = ll.next;
    i++;
  }
  return i;
}



function mergell(n1, n2) {
  console.log("+++")
  console.log(n1)
  console.log(n2)

  if(currN1 && !currN2)
    return currN1;

  if(currN2 && !currN1)
    return currN2;



  var currN1 = n1;
  var currN2 = n2;
  var newll = null;
  var currll = null;

  if(currN1.val < currN2.val){
    newll = currll = currN1;
    currN1 = currN1.next;
  } else {
    newll = currll = currN2;
    currN2 = currN2.next;
  }

  while(currN1 && currN2) {
    // console.log(currN1, currN2)
    if(currN1.val < currN2.val) {
      currll.next = currN1;
      currN1 = currN1.next;
    } else{
      currll.next = currN2;
      currN2 = currN2.next;

    }

    currll = currll.next;

  }

  while(currN1) {
    currll.next = currN1;
    currll = currll.next;
    currN1 = currN1.next;

  }

  while(currN2) {
    currll.next = currN2;
    currll = currll.next;
    currN2 = currN2.next;
  }


  return newll;

}
