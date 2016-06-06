// new Array()
var arr = [1,3,5,7];
var arr2 = [2,4,6,8,,,,,];


function mergeSortedArrays(arr, arr2) {

  var h1 = new MaxHeap();
  h1.insert(arr);

  var h1 = new MaxHeap();
  h1.insert(arr);


}


var maxHeap = function() {

  this.values = [];


  this.insert = function(items) {

    this.values.push(items);



  }

  this.bubbleUp = function(index) {
    if(index === 0) return;
    var parentIndex = index / 2;
    var parent = this.values[parentIndex];

    if(this.values[index] > this.values[parent]) {
      this.swap(index, parent);
      this.bubbleUp(parent);
    }

  }
  this.swap = function(i, j) {
    var temp = this.values[i];
    this.values[i] = this.values[j];
    this.values[j] = temp;
  }

  this.extract = function() {
    if(this.values.length === 1)
      return this.values.pop();

    this.swap(0, this.values.length - 1);
    var value = this.values.pop();

    this.bubbleDown(index);
  }

  this.bubbleDown = function(index) {
    if(this.values.length > 1){
      var leftChild = 2 * index + 1;
      var rightChild = 2 * index + 2;

      var max = index;

      if(this.values[max] < this.values[leftChild])
        max = leftChild;

      if(this.values[max] < this.values[rightChild])
        max = rightChild;

      this.bubbleDown(max);
    }

  }
}

console.log(mergeSortedArrays(arr, arr2))
