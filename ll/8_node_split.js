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

var a = _insert_node_into_singlylinkedlist(null, "a");
var b = _insert_node_into_singlylinkedlist(a, "b");
var c = _insert_node_into_singlylinkedlist(a, "c");
var d = _insert_node_into_singlylinkedlist(a, "d");
var e = _insert_node_into_singlylinkedlist(a, "e");
// var f = _insert_node_into_singlylinkedlist(a, "f");

function nodeSplit(ll) {
  var curr = ll;
  var even;
  var odd;
  var currOdd;
  var currEven;

  if(curr) {
    odd = currOdd = curr;
    curr = curr.next;
  }

  if(curr) {
    even = currEven = curr;
    curr = curr.next;
  }

  while(curr) {
    currOdd.next = curr;
    currOdd = currOdd.next;
    curr = curr.next;

    if(curr) {
      currEven.next = curr;
      currEven = currEven.next;
      curr = curr.next;
    } else {
      currEven.next = null;
    }
  }




  return { "odd": odd, "even": even }
}

console.log(nodeSplit(a))
