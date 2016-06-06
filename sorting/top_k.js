// seems like all you need to do is implements heaps


// build a tree via insert
  // bubble up

// getMin or getMax
  // swap with index 0 item
  // bubble down


// Use median of 5 to get


// METHOD 2
//another way is to create a heap
// then get the last row and find the median
// then use quicksort on that

// 1) Use order statistic algorithm to find the kth largest element. Please see the topic selection in worst-case linear time O(n)
// 2) Use QuickSort Partition algorithm to partition around the kth largest number O(n).
// 3) Sort the k-1 elements (elements greater than the kth largest element) O(kLogk). This step is needed only if sorted output is required.

// Time complexity: O(n) if we don’t need the sorted output, otherwise O(n+kLogk)


// Actual method because answer below cannot handle streams
// create a min heap of K elements
// throw the rest away
// create a min heap and delete root if the item is smaller

function topK(iStream, iK) {
  var topHeap = createHeap(iStream);
  extractTopK(topHeap, iK);

}

function extractTopK(heap, k){
  for(var i = 0; i < k; i++) {
    var val = heap.extractMin()
    console.log(val)

  }
}

function createHeap(arr) {

  var heap = new MinHeap();
  heap.multiInsert(arr);
  console.log(heap.values)

  return heap;
}


var MinHeap = function() {

  this.values = [];
  this.insert = function(item) {
    this.values.push(item);

    this.bubbleUp(this.values.length - 1);

  }

  this.multiInsert = function(items) {
    Array.prototype.push.apply(this.values, items);
    var halfLen = Math.floor(this.values.length / 2);
    for(var i = halfLen; i >= 0; i--) {
      this.bubbleDown(i);
    }
  }

  this.bubbleUp = function(index) {
    if(this.values.length > 1) {
      var parent = Math.floor((index - 1) / 2);
      if(this.values[index] < this.values[parent]) {
        this.swap(index, parent);
        this.bubbleUp(parent);
      }
    }
  }

  this.swap = function(i, j) {
    var temp = this.values[i];
    this.values[i] = this.values[j];
    this.values[j] = temp;
  }

  this.extractMin = function() {
    if(this.values.length < 1) return null;
    if(this.values.length === 1) this.values.pop();

    this.swap(0, this.values.length - 1);
    //k console.log(this.values)
    var min = this.values.pop();
    this.bubbleDown(0);

    return min;
  }

  this.bubbleDown = function(index) {
    if(this.values.length > 1) {
      var leftLeaf = 2 * index + 1;
      var rightLeaf = 2 * index + 2;

      var min = index;

      if(this.values[leftLeaf] < this.values[min])
        min = leftLeaf;

      if(this.values[rightLeaf] < this.values[min])
        min = rightLeaf;

      if(min != index) {
        this.swap(index, min);
        this.bubbleDown(min);
      }
    }

  }
}

topK([5,4,3,2,1], 3)
// var minHeapOne = new MinHeap();
// minHeapOne.insert(2);
// minHeapOne.insert(3);
// minHeapOne.insert(1);


// console.log(minHeapOne.extractMin());
// console.log(minHeapOne.extractMin());
// console.log(minHeapOne.values)
