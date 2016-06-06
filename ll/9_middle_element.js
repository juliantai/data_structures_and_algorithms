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
var e = _insert_node_into_singlylinkedlist(a, "5");
var f = _insert_node_into_singlylinkedlist(a, "6");


function findMiddleNode(pList) {

  if(!pList) return null;

  var curr = pList.next;
  var center = pList;
  var moveCenter = true;

  while(curr) {
    if(moveCenter) {
      center = center.next;
      moveCenter = false;
    } else {
      moveCenter = true;
    }

    curr = curr.next;
  }

  return center.val;


}

console.log(findMiddleNode(a))
