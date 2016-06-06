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

var a = _insert_node_into_singlylinkedlist(null, 1);
var b = _insert_node_into_singlylinkedlist(a, 2);
var c = _insert_node_into_singlylinkedlist(a, 3);
var d = _insert_node_into_singlylinkedlist(a, 4);
d.next.next.next.next = a;

// var e = _insert_node_into_singlylinkedlist(a, "5");
// var f = _insert_node_into_singlylinkedlist(a, "6");


function findMinNode(ll) {
  //locate the max node
  if(!ll) return;
  var max = ll;
  var curr = ll.next;

  while(max.val < curr.val) {
    max = curr;
    curr = curr.next;

  }

  curr = max;
  var len = 1;
  while(curr.next.val < max.val) {
    len += 1;
    curr = curr.next;
  }

  curr = max;
  var median = null;
  var halfLen = Math.ceil(len / 2);
  while(halfLen--) {
    curr = curr.next;
  }

  if(len % 2 === 0) {
    median = (curr.val + curr.next.val) / 2;
  } else {
    median = curr.val;
  }

  return median;


}

console.log(findMinNode(a))
