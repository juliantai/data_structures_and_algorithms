var arr = generateNumbers(10);

function generateNumbers(length){
  var arr = [];
  for(var i = length; i > 0; i--) {
    arr.push(i);
  }
  return arr;
}

function mergeSort(arr) {


  if(arr.length < 2) {
    return arr;
  }

  var pivot = Math.floor(arr.length / 2);
  var left = arr.slice(0, pivot);
  var right = arr.slice(pivot);
  // console.log(left)
  // console.log(right)
  // [5,4,3,2,1]
  // 5 / 2 = 2.5 floor 2
  // [5,4] slice non inclusive
  // [3, 2, 1]


  //mergesort left
  // [5]
  // [4]



  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  var result = [];
  var i = 0;
  var j = 0;

  while(i < left.length && j < right.length) {
    if(left[i] < right[j]) {
      result.push(left[i++])
    } else {
      result.push(right[j++])
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
}


console.log(merge([5,2,1], [4]));
