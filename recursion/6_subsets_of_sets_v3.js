// 1,2,2,4 example from ganesh

function Subsets(arr) {

  var arr = arr;
  var subsetArr = [];

  this.run = function() {
    for(var i = 0; i < arr.length; i++) {
      this.finder([], i)
    }
    return subsetArr;
  }

  this.finder = function(a, index) {
    var result = a.concat(arr[index]);
    subsetArr.push(result);

    for(var i = index + 1; i < arr.length; i++) {
      this.finder(result, i)
    }

  }

}

var s = new Subsets([1, 2, 3]);
var arrVals = s.run()
console.log(arrVals.length === 7)

