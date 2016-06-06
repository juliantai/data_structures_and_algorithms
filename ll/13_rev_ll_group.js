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
var e = _insert_node_into_singlylinkedlist(null, "5");
var d = _insert_node_into_singlylinkedlist(e, "4");
var c = _insert_node_into_singlylinkedlist(e, "3");
var b = _insert_node_into_singlylinkedlist(e, "2");
var a = _insert_node_into_singlylinkedlist(e, "1");
// var f = _insert_node_into_singlylinkedlist(a, "6");


console.log(revGroup(d, 2, 5))
function revGroup(rll, k, l) {
  var remainder = l % k || k;
  var curr = rll;
  var newll = curr;
  var t;

  while(remainder > 0) {
    t = curr;
    curr = curr.next;

    if(remainder === 1)
      t.next = null;

    remainder--;
  }

  // console.log(newll)


  while(curr) {
    var temp = newll;
    newll = curr;
    var i = 0;
    while(i < k) {
      t = curr;
      curr = curr.next;

      i++;
    }

    t.next = temp;

  }

  return newll;
}
