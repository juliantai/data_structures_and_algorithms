// given a point P
// given N points
// find K points closest to P

//quick select
//heap
//quick sort modified


// if max heap nlog k if k is much smaller than n

// quicksort will be n^2 in the worst case


function nearestNeighbor() {
  var p = [2,0];
  var neighbors = generateNeighbors(4, 3);
  replacePointsWithDist(p, neighbors);
  var qs = new QuickSort();
  qs.insertValues(neighbors);
  qs.smallestElements(5);

}

function generateNeighbors(x, y) {
  var arr = []
  for(var i = 0; i < x; i++) {

    for(var j = 0; j < y; j++) {

      if(Math.random() > 0.49)
        arr.push([i, j])
      else
        arr.unshift([i, j])
    }
  }

  return arr;
}

function distanceFormula(p1, p2) {
  var x = p1[0] - p2[0];
  var y = p1[1] - p2[1];

  return Math.sqrt(x * x + y * y);
}

function replacePointsWithDist(p, neighbors) {
  for(var i = 0; i < neighbors.length; i++)
    neighbors[i] = distanceFormula(p, neighbors[i]);
}

var QuickSort = function() {

  this.values = []

  this.insertValues = function(arr) {
    Array.prototype.push.apply(this.values, arr);

  }

  this.smallestElements = function(k) {
    // console.log(this.values)
    this.qs(0, this.values.length - 1, k);
    console.log(this.values)
  }

  this.qs = function(start, end, k) {
    var i = this.partition(start, end, k);

    //block if its exactly equal
    if(i === k) return;

    if(start < i - 1){
      this.qs(start, i - 1, k);
    }

    //block the latter half if its greater than the number of digits

    if(i <= k - 1) {
      if(i < end) {
        this.qs(i, end, k);
      }
    }


  }

  this.partition = function(start, end, k) {


      var pivotIndex = Math.floor((start + end) / 2);
      var pivot = this.values[pivotIndex];
      console.log("Pivot" + pivot)
      var i = start;
      var j = end;

      while(i <= j) {

        while(this.values[i] < pivot) i++;
        while(this.values[j] > pivot) j--;
        console.log(i, j)
        if(i <= j) {
          this.swap(i, j);
          i++;
          j--;
        }

      }
      console.log("partitioned")
      return i;

  }



  this.swap = function(i, j) {
    var temp = this.values[i];
    this.values[i] = this.values[j];
    this.values[j] = temp;
  }


}

nearestNeighbor()
