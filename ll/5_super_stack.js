function Node(value, next) {
  this.value = value;
  this.next = next;
}

function Stack() {
  var len = 0;
  var head = null;

  this.push = function(n) {
    if(!n) {
      head = new Node(n);
    } else {
      var temp = head;
      head = new Node(n);
      head.next = temp;
    }
    console.log(head.value);
    len++;
  }

  this.pop = function() {
    if(!head){
      console.log("EMPTY");
    } else if(!head.next) {
      console.log("EMPTY");
      head = null;
      len--;
    } else {
      head = head.next;
      len--;
      console.log(head.value)
    }
  }

  this.inc = function(x, d) {

    var temp = head;
    var i = 0;
    var v = len - x;

    while(temp) {
      if(i >= v) {
        temp.value += d;
      }
      temp = temp.next;
      i++;
    }
    console.log(head.value);
  }
}

var s = new Stack();
s.push(4);
s.pop();
s.push(3);
s.push(5);
s.push(2);
s.inc(3, 1);
s.pop();
s.push(1);
s.inc(2, 2);
s.push(4);
s.pop();
s.pop();
