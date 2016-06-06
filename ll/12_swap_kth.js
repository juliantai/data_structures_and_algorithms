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

var a = _insert_node_into_singlylinkedlist(null, "1");
var b = _insert_node_into_singlylinkedlist(a, "2");
var c = _insert_node_into_singlylinkedlist(a, "3");
var d = _insert_node_into_singlylinkedlist(a, "4");
// var e = _insert_node_into_singlylinkedlist(a, "5");
// var f = _insert_node_into_singlylinkedlist(a, "6");


swapNodes(a, 2)
function swapNodes(ll, k) {

  if(!ll) return null;
  var curr = ll;
  var p1 = ll;

  var i = 1;
  while(i < k - 1) {
    p1 = curr.next;

    if(!p1)
      curr = ll;
    else
      curr = curr.next;

    i++;
  }


  var p2 = curr;
  var i = 1;
  while(i < k - 1) {
    curr = curr.next;
    if(!curr)
      curr = ll;
    i++;
  }

  while(k >= 0) {
    curr = curr.next;
    if(!curr)
      curr = ll;

    p2 = p2.next;
    if(!p2)
      p2 = ll;

    k--;
  }

  console.log(p1)
  console.log(p2)


  if(!p2.next || !p2.next.next) {
    if(p2.next)
      ll = p2.next
    else
      ll = p2;

    ll.next = p1.next;
    p2.next = p1;
    p2.next.next = null;

  } else {

    var temp = p1.next;
    var temp2 = p2.next;
    p1.next = p2.next;
    p1.next.next = temp.next;
    p2.next = temp;
    p2.next.next = temp2.next;



  }

  console.log(ll)
  return ll;
}
