// [1,2,3]
// create a K heap
var heap = {
  values: [],
  insert: function(value){
    this.values.push(value);

    if(this.values.length > 1)
      this.bubbleUp(this.values.length - 1);
  },
  bubbleUp: function(index) {

    var parentIndex = Math.floor((index - 1) / 2);

    if(this.values[index] < this.values[parentIndex])
      this.swap(index, parentIndex);

    if(parentIndex > 0)
      this.bubbleUp(parentIndex);

  },

  swap: function(i, j) {
    var temp = this.values[i];
    this.values[i] = this.values[j];
    this.values[j] = temp;
  },

  extractMin: function() {
    var min;
    if(this.values.length === 0)
      min = null;
    else if(this.values.length === 1)
      min = this.values.pop();
    else {
      var temp = this.values.pop();
      var min = this.values[0];
      this.values[0] = temp;
      this.bubbleDown(0)
    }

    if(min !== null)
      console.log(min)

    return min;
  },

  bubbleDown: function(index) {

    var childOne = 2 * index + 1;
    var childTwo = 2 * index + 2;
    var min = index;
    if(this.values[childOne] < this.values[index])
      min = childOne;

    if(this.values[childTwo] < this.values[min])
      min = childTwo;

    if(min != index) {
      this.swap(min, index);
      this.bubbleDown(min);
    }

  }



}

var facebook = {
  numbers: [
    [1, 3, 5, 7],
    [2, 4, 6, 8],
    [0, 9, 10, 11]
  ],
  extractSorted: function() {
    for(var i = 0; i < 4; i++) {
      var n = 0;
      while(n < 3) {
        heap.insert(this.numbers[n][i]);

        if(i === 0 && n === 2 || i > 0) {
          heap.extractMin()
          // if this is the end extract the rest
          if(i === 3 && n === 2) {
            while(heap.extractMin()) {}

          }
        }

        n++;
      }

    }

    console.log(heap.values)
  }
}

facebook.extractSorted();
heap.insert(5)
heap.insert(4)
heap.insert(4)
heap.insert(4)
heap.insert(4)
heap.insert(7)
heap.insert(4)
heap.insert(4)
heap.insert(14)

console.log(heap.extractMin())
// console.log(heap.values)
