function Node(val) {
  this.val = val;
  this.num_levels = 0;
  this.next = [];
}
function SkipList() {
  var head = null;

  this.find = function(v) {
    if(!head)
      return null;

    var curr = head;
    var cLevel = curr.num_levels;
    // return if found at head
    if(curr.val === v)
      return curr;

    console.log(curr.next[cLevel])
    while(curr) {
      if(curr.next[cLevel]) {

        if(curr.next[cLevel].val === v)
          break;

        var n = curr.next[cLevel];

        if(n.val > v)
          cLevel--;
        else
          curr = curr.next[cLevel];
      } else {
        break;
      }
    }
    return curr;
  }

  this.insert = function(v) {
    console.log(1)
    var val = this.find(v);
    console.log("wow")
    var node = new Node(v);

    if(!val) {
      if(!head) {
        head = node;
      } else {
        console.log("inside")
        var temp = head;
        var level = head.num_levels;
        head = node;
        var i = 0;
        while(i <= level) {
          head.next[i] = temp;
          i++
        }
        head.next[level + 1] = head.next[level].next;
      }
    } else if(!val.next[0]) {
      var i = 0;
      while(i <= val.num_levels) {
        val.next[i] = node;
        i++;
      }
      head.num_levels++;
      head.next[head.num_levels + 1] = node;
    } else {
      var i = 0;
      var chance = 100;
      do {
        if(chance > 50) {
          node.num_levels++;
          var temp = val.next[i];
          val.next[i] = node;
          node.next[i] =  temp;
          chance = Math.random() * 100;

        } else {
          break;
        }
      } while(i < head.num_levels);
    }

    return head;


  }
}

var sl = new SkipList();
console.log(sl.insert(0));
console.log(sl.insert(3));
console.log(sl.insert(2));
