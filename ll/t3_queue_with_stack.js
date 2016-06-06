function Stack() {
  var arr = [];

  this.push = function(val) {
    return arr.push(val);
  }

  this.pop = function(val) {
    return arr.pop();
  }

  this.peek = function(val) {
    return arr[arr.length - 1];
  }

}



function Queue() {
  var s1 = new Stack();
  var s2 = new Stack();

  this.push = function(val) {
    return s2.push(val);
  }

  this.pop = function() {
    var val = s1.pop();
    if(!val) {
      this._push(s2, s1);
      val = s1.pop();
    }
    return val;
  }

  this._push = function(s2, s1) {
    var val = s2.pop()

    if(!val) {
      throw -1;
    }
    while(val) {
      s1.push(val);
      val = s2.pop();
    }
  }
}

var q = new Queue();
console.log(q.push(1));
console.log(q.push(2));
console.log(q.push(3));
console.log(q.pop());
console.log(q.pop());
console.log(q.pop());
console.log(q.pop());
