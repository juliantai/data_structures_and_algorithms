function Node(value, next) {
  this.value = value;
  this.next = next;
}

function MinStack() {
  var head = null;
  var minHead = null;

  this.push = function(n) {
    minHead = this._minPush(minHead, n);
    head = this._push(head, n);
  }


  this.pop = function() {
    minHead = this._minPop(minHead, head);
    head = this._pop(head)
  }

   this.getMinimum = function() {
    if(!minHead)
      return null;

    return minHead.value;
  }

  this._minPush = function(mHead, n) {

    // if(mHead)
      // console.log("ahh", n, mHead)

    if(!mHead)
      mHead = this._push(mHead, n);
    else if(mHead.value >= n)
      mHead = this._push(mHead, n);

    return mHead;
  }

  this._minPop = function(mHead, h) {

    if(!mHead)
      return null;

    if(mHead.value === h.value)
      return this._pop(mHead);

    return mHead;
  }



  this._push = function(h, n) {
    if(!n) {
      h = new Node(n);
    } else {
      var temp = h;
      h = new Node(n);
      h.next = temp;
    }
    // console.log(h.value);

    return h;

  }

  this._pop = function(h) {
    if(!h){
      console.log("EMPTY");
    } else if(!h.next) {
      console.log("EMPTY");
      h = null;
    } else {
      h = h.next;
      // console.log(h.value)
    }

    return h;
  }


}


var ms = new MinStack();
ms.push(5);
ms.push(6);
console.log(ms.getMinimum());
ms.push(2);
console.log(ms.getMinimum());
ms.pop();
console.log(ms.getMinimum());
ms.pop();
console.log(ms.getMinimum());
