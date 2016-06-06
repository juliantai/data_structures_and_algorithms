function Node(k, v) {
  this.k = k;
  this.v = v;
  this.prev = null;
  this.next = null;
}


function LRUCache() {
  var tail;
  var head;
  var h = {};

  this.insert = function(k, v) {
    h[k] = new Node(k, v);

    if(!head && !tail) {
      head = tail = h[k].next = h[k].prev = h[k];
    } else {
      var temp = head;
      head = h[k];
      h[k].next = temp;
      temp.prev = h[k];
      h[k].prev = tail;
    }
    console.log(h)
  }

  this.lookup = function(k) {
    if(h[k] && h[k].v) {

      if(tail !== head && h[k] !== head) {
        if(h[k] == tail) {
          tail = h[k].prev;
          head = h[k];
        } else {
          h[k].prev = h[k].next;
          h[k].next = h[k].prev;
          h[k].next = head;
          h[k].prev = tail;
          head = h[k];
        }
      }
      return h[k].v;
    }

    return null;
  }

  this.evict = function() {
    h[tail.k] = null;

    if(head == tail) {
      head = tail = null;
    } else {

      tail = tail.prev;
      tail.next = head;
      head.prev = tail;
    }

    console.log(h)
  }

  this.getH = function() {
    return h;
  }
}

var lru = new LRUCache();
lru.insert(1, "A");
lru.insert(2, "B");
lru.lookup(2);
lru.evict();
